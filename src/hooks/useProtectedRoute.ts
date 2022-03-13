import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useProtectedRoute() {
    const navigate = useNavigate();

    const isLoggedIn = useCallback(() => {
        const user = localStorage.getItem("user");

        if (user) return true;
        return false;
    }, []);

    useEffect(() => {
        if (!isLoggedIn()) {
            navigate("/");
        }
    }, [navigate, isLoggedIn]);

    return isLoggedIn();
}
