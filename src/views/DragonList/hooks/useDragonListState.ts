import useFetch from "hooks/useFetch";
import Dragon from "interfaces/Dragon";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useDragonListState() {
    const [API, { data, loading, safeToRender }] = useFetch<Dragon[]>();
    const navigate = useNavigate();

    const goToLogin = useCallback(() => {
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
        API();
    }, [API]);

    useEffect(() => {
        fetchNewDragons();
    }, [fetchNewDragons]);

    return [
        { data, loading, safeToRender },
        { goToLogin, goToDragonCreation, goToDragonDetail },
        { fetchNewDragons },
    ] as const;
}
