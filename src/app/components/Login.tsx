import { useAuthStore } from "@/stores/authStore";

import React from "react";

const Login = () => {
    const login = useAuthStore((state) => state.login);

    const handleLogin = () => {
        const user = { id: "1", name: "Holly Hendrix", email: "hollyhendrix@brazzers.com" };

        login(user);
    };

    return <button onClick={handleLogin}>Login</button>;
};

export default Login;
