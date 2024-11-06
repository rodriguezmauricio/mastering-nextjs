"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/authStore";

type PreotectedRouterProps = {
    children: React.ReactNode;
};

const ProtectedRoute = ({ children }: PreotectedRouterProps) => {
    const { user, loading } = useAuthStore();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push("/login");
        }
    }, [user, loading, router]);

    if (loading && user) return <p>Loading...</p>;

    return <div>{children}</div>;
};

export default ProtectedRoute;
