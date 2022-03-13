import useFetch from "hooks/useFetch";
import Dragon from "interfaces/Dragon";
import { useCallback, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function useDragonDetailState() {
    const { dragonId } = useParams<{ dragonId: string }>();
    const [API, { data, loading, safeToRender }] = useFetch<Dragon>();
    const navigate = useNavigate();

    const goToDragonList = useCallback(() => {
        navigate("/dragons");
    }, [navigate]);

    useEffect(() => {
        API(`/${dragonId}`);
    }, [API, dragonId]);

    return [{ data, loading, safeToRender }, { goToDragonList }] as const;
}
