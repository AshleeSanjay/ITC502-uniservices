"use client"
import { getAuth, signOut } from 'firebase/auth';
import UserBookings from '@/components/User/UserBookings';
import { useRouter } from 'next/navigation'; // Import useRouter for redirection

export default function ProfilePage() {
  const auth = getAuth();
  const router = useRouter(); // Initialize the router

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Handle sign-out success.
      router.push('/login'); // Redirect to login page after logout
    } catch (error) {
      // Handle errors here, such as displaying a notification to the user
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="profile-page p-10">
      <button
        onClick={handleLogout}
        className="logout-button bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
      <UserBookings />
    </div>
  );
}
