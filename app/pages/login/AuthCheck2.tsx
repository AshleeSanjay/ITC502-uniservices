"use client"
import { useEffect, useState } from 'react';
import { auth } from "../../firebase";
import { Auth, User } from 'firebase/auth';
import { useRouter } from 'next/navigation';

type AuthCheckProps = {
  children: React.ReactNode;
};

export default function AuthCheck({ children }: AuthCheckProps) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();  // instantiate the router

    useEffect(() => {
        return auth.onAuthStateChanged(user => {
            if (!user) {
                router.push('/pages/login');  // navigate to the login page
            } else {
                setUser(user);
            }
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <>Loading...</>;
    }

    if (user) {
        return <>{children}</>;
    } else {
        return <>Not logged in to see this</>;
    }
}