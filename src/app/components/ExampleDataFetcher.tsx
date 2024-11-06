/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";

const ExampleDataFetcher = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/data");
                if (!response.ok) throw new Error("Failed to fetch data");
                const result = await response.json();
                setData(result);
            } catch (error: any) {
                setError(error.message);
            }
        };

        fetchData();
    }, []);

    if (error) return <p>Error: {error}</p>;
    if (!data) return <p>Loading...</p>;

    return (
        <div className="">
            <h2>Data Fetched Successfully</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default ExampleDataFetcher;
