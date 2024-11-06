"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";

type UserProps = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
};

const UserFetcher = () => {
    const [user, setUser] = useState<UserProps | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
                if (!response.ok) throw new Error("Failed to fetch data");
                const result = await response.json();
                setUser(result);
            } catch (error: any) {
                setError(error.message || `unknown error`);
            }
        };
        fetchData();
    }, []);

    if (error) return <p>Error: {error}</p>;
    if (!user) return <p>Loading...</p>;

    return (
        <div className="">
            <h2>User fetched successfully</h2>
            <pre>{JSON.stringify(user, null, 2)}</pre>
            <p>name: {user.name}</p>
            <p>zipcode: {user.address.zipcode}</p>
        </div>
    );
};

export default UserFetcher;
