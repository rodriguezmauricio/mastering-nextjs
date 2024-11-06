import { useAuthStore } from "@/stores/authStore";
import Button from "./Button";

const UserProfile = () => {
    const { user, logout } = useAuthStore();

    if (!user) return <p>No user Logged in</p>;

    return (
        <div className="">
            <h2>Welcome, {user.name}</h2>
            <Button onClick={logout} text="Logout" secondary={false} />
        </div>
    );
};

export default UserProfile;
