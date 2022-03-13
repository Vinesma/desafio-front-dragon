import Dragon from "interfaces/Dragon";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function useGoToPage() {
    const navigate = useNavigate();

    const goToLogin = useCallback(() => {
        navigate("/");
    }, [navigate]);

    const goToDragonList = useCallback(() => {
        navigate("/dragons");
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

    return [
        { goToLogin, goToDragonList, goToDragonCreation, goToDragonDetail },
    ] as const;
}
