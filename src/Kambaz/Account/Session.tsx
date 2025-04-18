/* import { useEffect, useState } from "react";
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
        // Don't fetch profile on signin/signup pages
        if (pathname.includes('/Kambaz/Account/Signin') ||
            pathname.includes('/Kambaz/Account/Signup')) {
            setLoading(false);
            return;
        }

        try {
            setLoading(true);
            setError(null);
            const user = await client.profile();
            dispatch(setCurrentUser(user));
        } catch (e: any) {
            console.error("Session error:", e);
            setError(e.message || "Failed to fetch user profile");
            // Only redirect if not already on signin/signup pages
            if (!pathname.includes('/Kambaz/Account/Signin') &&
                !pathname.includes('/Kambaz/Account/Signup')) {
                navigate("/Kambaz/Account/Signin");
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []); // Only run once on mount, not on pathname change

    if (loading && !pathname.includes('/Kambaz/Account/Signin') &&
        !pathname.includes('/Kambaz/Account/Signup')) {
        return <div>Loading session...</div>;
    }

    if (error && !pathname.includes('/Kambaz/Account/Signin') &&
        !pathname.includes('/Kambaz/Account/Signup')) {
        return <div className="alert alert-danger">{error}</div>;
    }

    return <>{children}</>;
}

export default Session;

 */

import * as client from "./client";
import { useEffect, useState } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
export default function Session({ children }: { children: any }) {
    const [pending, setPending] = useState(true);
    const dispatch = useDispatch();
    const fetchProfile = async () => {
        try {
            const currentUser = await client.profile();
            dispatch(setCurrentUser(currentUser));
        } catch (err: any) {
            console.error(err);
        }
        setPending(false);
    };
    useEffect(() => {
        fetchProfile();
    }, []);
    if (!pending) {
        return children;
    }
}


