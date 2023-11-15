"use client"
import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { collection, query, where, getDocs, Timestamp, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/config/firebase';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';

interface Booking {
  id: string;
  date: Timestamp;
  time: string;
  bookingType: string;
  dropdownOption: string;
  numberOfPeople: number;
  userEmail: string;
}

function handleFetchError(error: any) {
  console.error('Fetch error:', error);
}

// Format Firebase Timestamp
const formatDate = (timestamp: Timestamp): string => {
  return timestamp.toDate().toLocaleDateString("en-US");
};

const UserBookings: React.FC = () => {
  // Define states
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [filter, setFilter] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [dateFilter, setDateFilter] = useState<'upcoming' | 'passed' | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser?.email) {
        setUser(authUser);
        fetchBookings(authUser.email);
      } else {
        router.push('/login');
      }
    });

    return () => unsubscribe();
  }, [auth, router]);

  const fetchBookings = async (userId: string) => {
    try {
      const bookingsQuery = query(collection(db, 'bookings'), where("userEmail", "==", userId));
      const querySnapshot = await getDocs(bookingsQuery);
      const fetchedBookings = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }) as Booking);
      // Sort bookings once after fetching
      const sortedBookings = fetchedBookings.sort((a, b) => b.date.toMillis() - a.date.toMillis());
      setBookings(sortedBookings);
    } catch (error) {
      handleFetchError(error);
    } finally {
      setLoading(false);
    }
  };

  const isUpcoming = (bookingDate: Timestamp): boolean => {
    const now = Timestamp.now();
    return bookingDate.toMillis() > now.toMillis();
  };





  const getNextBooking = (bookings: Booking[]): Booking | undefined => {
    const now = Timestamp.now();
    // Filter for upcoming bookings and sort them by date in ascending order
    const upcomingBookings = bookings
      .filter(booking => booking.date.toMillis() > now.toMillis())
      .sort((a, b) => a.date.toMillis() - b.date.toMillis());
    // Return the first booking in the sorted array, which should be the next upcoming booking
    return upcomingBookings[0];
  };
  

  const handleDeleteBooking = async (bookingId: string) => {
    // Get a reference to the document to delete
    const bookingRef = doc(db, 'bookings', bookingId);
  
    try {
      // Delete the document
      await deleteDoc(bookingRef);
      console.log(`Booking with ID: ${bookingId} deleted successfully`);
  
      // Update the local state to remove the deleted booking
      setBookings(bookings.filter(booking => booking.id !== bookingId));
    } catch (error) {
      console.error("Error deleting booking: ", error);
      // Handle the error (e.g., show an error message to the user)
    }
  };
  

  const nextBooking = getNextBooking(bookings);


  // Get unique booking types for filter buttons
  const bookingTypes = Array.from(new Set(bookings.map(b => b.bookingType)));

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>No user data available.</div>;
  }

  return (
    <div className="overflow-x-auto p-10 gap-1 rounded-xl">
      <div className="flex flex-col md:flex-row justify-start rounded-xl items-start md:items-center mb-4">
        <div className='px-10 roudned-xl'>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Bookings for:</h1>
          <h1 className="text-3xl text-gray-900 dark:text-white">{user.email}</h1>
        </div>
        {nextBooking && (
          <div className="mt-4 md:ml-4 md:mt-0 p-4 bg-green-100 rounded-lg">
            <h2 className="text-xl font-semibold">Your next booking:</h2>
            <p className="text-md">{`Type: ${nextBooking.bookingType}`}</p>
            <p className="text-md">{`Option: ${(nextBooking.dropdownOption)}`}</p>
            <p className="text-md">{`Date: ${formatDate(nextBooking.date)}`}</p>
            <p className="text-md">{`Time: ${nextBooking.time}`}</p>
          </div>
        )}
      </div>

      <div className="flex space-x-2 mb-4">

        <button
          className={`rounded-full px-4 py-2 text-sm font-medium border ${filter === null ? 'bg-blue-500 text-white' : 'text-blue-500'}`}
          onClick={() => setFilter(null)}
        >
          All
        </button>

        <button
          className={`rounded-full px-4 py-2 text-sm font-medium border ${dateFilter === 'upcoming' ? 'bg-green-500 text-white' : 'text-green-500'}`}
          onClick={() => setDateFilter(dateFilter === 'upcoming' ? null : 'upcoming')}
        >
          Upcoming
        </button>

        <button
          className={`rounded-full px-4 py-2 text-sm font-medium border ${dateFilter === 'passed' ? 'bg-red-500 text-white' : 'text-red-500'}`}
          onClick={() => setDateFilter(dateFilter === 'passed' ? null : 'passed')}
        >
          Passed
        </button>

        {bookingTypes.map(type => (
          <button
            key={type}
            className={`rounded-full px-4 py-2 text-sm font-medium border ${filter === type ? 'bg-blue-500 text-white' : 'text-blue-500'}`}
            onClick={() => setFilter(type)}
          >
            {type}
          </button>

        ))}
      </div>
      <table className="min-w-full divide-y divide-gray-200 rounded-xl">
        <thead className="bg-gray-50 rounded-xl">
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
              Status
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      Delete
    </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
  {bookings
    .filter(booking => (filter === null || booking.bookingType === filter) &&
      (dateFilter === null ||
        (dateFilter === 'upcoming' && isUpcoming(booking.date)) ||
        (dateFilter === 'passed' && !isUpcoming(booking.date))))
    .map((booking) => (
      <tr key={booking.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {formatDate(booking.date)}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.time}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.bookingType}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.dropdownOption}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm flex justify-center text-gray-500">
          <span className="flex items-center justify-center h-6 w-6 rounded-full bg-green-500" style={{ backgroundColor: isUpcoming(booking.date) ? '#10B981' : '#EF4444' }}>
            &nbsp; {/* Empty space for the circle */}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <button
            onClick={() => handleDeleteBooking(booking.id)}
            className="text-red-500 hover:text-red-700"
          >
            Delete
          </button>
          </td>
      </tr>
    ))}
</tbody>

      </table>
    </div>
  );
};

export default UserBookings;

