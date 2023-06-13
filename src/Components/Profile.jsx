import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return
    }

    return (
        isAuthenticated && (
            <div>
                <img className="h-8 rounded place-self-center" src={user.picture} alt={user.name} />
            </div>
        )
    );
};

export default Profile;