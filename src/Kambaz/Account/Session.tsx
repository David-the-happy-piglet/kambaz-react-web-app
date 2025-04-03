import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import * as client from "./client";

function Session({ children }: { children: React.ReactNode }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchProfile = async () => {
        try {
            setLoading(true);
            setError(null);
            const user = await client.profile();
            dispatch(setCurrentUser(user));
        } catch (e: any) {
            console.error("Session error:", e);
            if (e.response?.status === 401 &&
                !pathname.includes('/Kambaz/Account/Signin') &&
                !pathname.includes('/Kambaz/Account/Signup')) {
                navigate("/Kambaz/Account/Signin");
            }
            setError("Failed to fetch user profile");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, [pathname]);

    if (loading) {
        return <div>Loading session...</div>;
    }

    if (error &&
        !pathname.includes('/Kambaz/Account/Signin') &&
        !pathname.includes('/Kambaz/Account/Signup')) {
        return <div className="alert alert-danger">{error}</div>;
    }

    return <>{children}</>;
}

export default Session;

