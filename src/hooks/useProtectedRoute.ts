import { useCallback, useEffect } from "react";
import useGoToPage from "./useGoToPage";

export default function useProtectedRoute() {
    const [{ goToLogin }] = useGoToPage();

    const isLoggedIn = useCallback(() => {
        const user = localStorage.getItem("user");

        if (user) return true;
        return false;
    }, []);

    useEffect(() => {
        if (!isLoggedIn()) {
            goToLogin();
        }
    }, [goToLogin, isLoggedIn]);

    return isLoggedIn();
}
