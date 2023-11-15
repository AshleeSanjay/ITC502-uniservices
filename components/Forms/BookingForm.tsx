"use client"
import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { doc, setDoc, Timestamp, deleteDoc } from 'firebase/firestore';
import { app, db } from '@/config/firebase';

interface BookingFormProps {
    onSuccess?: () => void;
    onError?: (error: any) => void;
}

interface BookingFormData {
    date: string;
    time: string;
    bookingType: 'vehicle' | 'room' | 'counselor';
    dropdownOption: string;
    numberOfPeople: number;
    userEmail?: string; // Optional field to store the user's email
}


const BookingForm: React.FC<BookingFormProps> = ({ onSuccess, onError }) => {
    const router = useRouter();
    const auth = getAuth(app);
    
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
                setUser(authUser);
            } else {
                router.push('/login');
            }
        });

        return unsubscribe;
    }, [router]);
    

    const initialFormState: BookingFormData = {
        date: new Date().toISOString().slice(0, 10),
        time: '12:00',
        bookingType: 'vehicle',
        dropdownOption: 'car',
        numberOfPeople: 1,
        userEmail: user?.email || undefined // Set the user's email if available
    };

    const [formData, setFormData] = useState<BookingFormData>(initialFormState);

    useEffect(() => {
        // Reset the dropdown option when the booking type changes
        setFormData(prevState => ({
            ...prevState,
            dropdownOption: bookingOptions[prevState.bookingType][0]
        }));
    }, [formData.bookingType]);
    
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    
   
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!user) {
            onError?.("User is not authenticated");
            return;
        }

        try {
            const newBooking = {
                ...formData,
                userEmail: user.email, // Include the user's email in the booking
                date: Timestamp.fromDate(new Date(`${formData.date} ${formData.time}:00`))
            };


            // Define a custom document name
            const customDocName = `${formData.bookingType}, ${formData.dropdownOption}`; // Example format: "2023-10-05-12:00-vehicle"

            // Use setDoc to set the data with the custom document name
            await setDoc(doc(db, 'bookings', customDocName), newBooking);

            if (onSuccess) onSuccess();
        } catch (error) {
            console.error("Error creating booking:", error);
            if (onError) onError(error);
        }
    };


    const bookingOptions = {
        vehicle: [
            'Campus Shuttle', 'Electric Car', 'Minivan', 
            'Charter Bus', 'Bicycle', 'Golf Cart'
        ],
        room: [
            'Lecture Hall', 'Seminar Room', 'Study Pod', 
            'Computer Lab', 'Library Carrel', 'Group Workspace'
        ],
        counselor: [
            'Prof. Einstein', 'Dr. Curie', 'Dr. Hawking', 
            'Prof. Turing', 'Dr. Goodall', 'Prof. Sagan'
        ]
    };
    
    
    return (
        <form onSubmit={handleSubmit} className='p-10'>


            <div className="mb-4">
                <label className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">Booking Type:</label>
                <select
                    name="bookingType"
                    value={formData.bookingType}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                    <option value="vehicle">Vehicle</option>
                    <option value="room">Room</option>
                    <option value="counselor">Counselor</option>
                </select>
            </div>


            <div className="mb-4">
                <label className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">Options:</label>
                <select
                    name="dropdownOption"
                    value={formData.dropdownOption}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                    {bookingOptions[formData.bookingType].map(option => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex mb-4">
                <div className="mr-4 flex-1"> {/* Added margin to the right */}
                    <label className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">Date:</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                </div>
                <div className="flex-1">
                    <label className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">Time:</label>
                    <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                </div>
            </div>
        


            <div className='flex justify-end'>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 dark:hover:bg-blue-700">Submit Booking</button>
            </div>
        </form>
    );
}

export default BookingForm;
