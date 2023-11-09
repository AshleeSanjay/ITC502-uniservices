"use client"
import React, { useEffect, useState } from 'react';
import { collection, getDocs, Timestamp } from 'firebase/firestore';
import { db } from '@/config/firebase';

interface Booking {
  date: Timestamp; // the date is stored as a Firestore Timestamp
  time: string;
  bookingType: string;
  dropdownOption: string;
  numberOfPeople: number;
}

// Moved outside the component to prevent re-creation on each render
const formatDate = (timestamp: Timestamp): string => {
    return timestamp.toDate().toLocaleDateString();
  };

const BookingsTable: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const fetchBookings = async () => {

      try {
        const bookingsCollectionRef = collection(db, 'bookings');
        const bookingsSnapshot = await getDocs(bookingsCollectionRef);
        const bookingsList = bookingsSnapshot.docs.map(doc => {
          const data = doc.data();
          // Ensure the data matches the Booking interface
          return {
            id: doc.id,
            date: data.date,
            time: data.time,
            bookingType: data.bookingType,
            dropdownOption: data.dropdownOption,
            numberOfPeople: data.numberOfPeople,
          };
        });
        setBookings(bookingsList);
      } catch (error) {
        console.error("Failed to fetch bookings:", error);
      }
    };
  
    fetchBookings();
  }, []);
  


  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Time
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Booking Type
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Option
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Number of People
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {bookings.map((booking, index) => (
            <tr key={index} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"> 
              {formatDate(booking.date)} {/* Use the helper function to format the date */}
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.time}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.bookingType}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.dropdownOption}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.numberOfPeople}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingsTable;
