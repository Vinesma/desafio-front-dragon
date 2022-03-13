import useFetch from "hooks/useFetch";
import useProtectedRoute from "hooks/useProtectedRoute";
import Dragon from "interfaces/Dragon";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useDragonListState() {
    const [API, { data, loading, safeToRender }] = useFetch<Dragon[]>();
    const navigate = useNavigate();
    const isLoggedIn = useProtectedRoute();

    const logout = useCallback(() => {
        localStorage.removeItem("user");
        navigate("/");
    }, [navigate]);

    const goToDragonCreation = useCallback(() => {
        navigate("/create_dragon");
    }, [navigate]);

    const goToDragonDetail = useCallback(
        (dragonId: Dragon["id"]) => {
            navigate(`/dragons/${dragonId}`);
        },
        [navigate]
    );

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
        { goToDragonCreation, goToDragonDetail },
        { fetchNewDragons, logout },
    ] as const;
}
