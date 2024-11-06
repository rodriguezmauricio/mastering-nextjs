"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/authStore";

const Login = () => {
    const { user, login } = useAuthStore();
    const router = useRouter();

    useEffect(() => {
        if (user) {
            // Redirect to dashboard if the user is already logged in
            router.push("/Dashboard");
        }
    }, [user, router]);

    const handleLogin = () => {
        const user = { id: "1", name: "Jane Doe", email: "jane@example.com" };
        login(user);
    };

    // If user exists, return null or a loading indicator to prevent showing the login page briefly
    if (user) return null;

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
