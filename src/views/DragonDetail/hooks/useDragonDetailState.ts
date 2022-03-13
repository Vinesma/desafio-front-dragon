import useFetch from "hooks/useFetch";
import useProtectedRoute from "hooks/useProtectedRoute";
import Dragon from "interfaces/Dragon";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function useDragonDetailState() {
    const { dragonId } = useParams<{ dragonId: string }>();
    const [API, { data, loading, safeToRender }] = useFetch<Dragon>();
    useProtectedRoute();

    useEffect(() => {
        API(`/${dragonId}`);
    }, [API, dragonId]);

    return [{ data, loading, safeToRender }] as const;
}
