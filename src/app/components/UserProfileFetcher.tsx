/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { fetchWithErrorHandling } from "../utils/fetchWithErrorHandling";

type User = {
    id: string;
    name: string;
    email: string;
};

const UserProfileFetcher = () => {
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await fetchWithErrorHandling<User>(
                    "https://jsonplaceholder.typicode.com/users/1"
                );
                setUser(userData);
            } catch (error: any) {
                setError(error.message || "unknown Error");
            }
        };

        fetchUser();
    }, []);

    if (error) return `Error: ${error}`;
    if (!user) return <p>loading...</p>;

    return (
        <div>
            <h2>{user?.name}</h2>
            <h2>{user?.email}</h2>
            <h2>{user?.id}</h2>
        </div>
    );
};

export default UserProfileFetcher;
