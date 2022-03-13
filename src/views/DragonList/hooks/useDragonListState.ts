import useFetch from "hooks/useFetch";
import Dragon from "interfaces/Dragon";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useDragonListState() {
    const [API, { data, loading, safeToRender }] = useFetch<Dragon[]>();
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/");
    };

    const goToDragonCreation = () => {
        navigate("/create_dragon");
    };

    useEffect(() => {
        API();
    }, [API]);

    return [
        { data, loading, safeToRender },
        { goToLogin, goToDragonCreation },
    ] as const;
}
