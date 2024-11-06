import { useState, useEffect } from "react";
import { useRouter } from "next/router";

type User = {
    id: string;
    name: string;
    email: string;
};

const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            setUser(JSON.parse(loggedInUser));
        } else {
            router.push("/login");
        }
    }, [router]);

    const login = (userData: User) => {
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
        router.push("/login");
    };

    return { user, login, logout };
};

export default useAuth;
