/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";

const EnvFetcher = () => {
    const [data, setData] = useState<any | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/1`);
                if (!response.ok) throw new Error("Failed to fecth data");
                const result = await response.json();
                setData(result);
            } catch (error: any) {
                setError(error.message || "unknown error");
            }
        };

        fetchData();
    }, []);

    if (error) return <p>Error: {error}</p>;
    if (!data) return <p>Loading...</p>;

    return (
        <div className="">
            <h2>Data fetched</h2>
            <pre>{JSON.stringify(data, null, 4)}</pre>
        </div>
    );
};

export default EnvFetcher;
