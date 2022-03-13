import useFetch from "hooks/useFetch";
import useGoToPage from "hooks/useGoToPage";
import useProtectedRoute from "hooks/useProtectedRoute";
import Dragon from "interfaces/Dragon";
import { useCallback, useEffect } from "react";

export default function useDragonListState() {
    const [API, { data, loading, safeToRender }] = useFetch<Dragon[]>();
    const isLoggedIn = useProtectedRoute();
    const [{ goToLogin }] = useGoToPage();

    const logout = useCallback(() => {
        localStorage.removeItem("user");
        goToLogin();
    }, [goToLogin]);

    const fetchNewDragons = useCallback(() => {
        const params = new URLSearchParams({
            sortBy: "name",
            order: "asc",
        }).toString();

        API(`?${params}`);
    }, [API]);

    useEffect(() => {
        if (isLoggedIn) {
            fetchNewDragons();
        }
    }, [fetchNewDragons, isLoggedIn]);

    return [
        { data, loading, safeToRender, isLoggedIn },
        { fetchNewDragons, logout },
    ] as const;
}
