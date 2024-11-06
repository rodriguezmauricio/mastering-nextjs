"use client";
import { useState, useEffect } from "react";
import { fetchWithErrorHandling } from "../utils/fetchWithErrorHandling";

type Posts = {
    id: number;
    title: string;
    body: string;
};

const PostFetcher = () => {
    const [post, setPost] = useState<Posts | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response: Posts = await fetchWithErrorHandling(
                    "https://jsonplaceholder.typicode.com/posts/1"
                );
                setPost(response);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchPosts();
    }, []);

    if (error) return `Error fetching data`;
    if (!post) return <p>Loading post...</p>;

    return (
        <div>
            <h2>Posts:</h2>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default PostFetcher;
