import { baseUrl } from "api/routes";
import { useCallback, useEffect, useState } from "react";

interface Options extends RequestInit {
    payload?: any;
    method: "GET" | "POST" | "PUT" | "DELETE";
}
type FetcherFunction = (url?: string, init?: Options) => Promise<void>;

export default function useFetch<DataType = any>() {
    const [data, setData] = useState<DataType | undefined>(undefined);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);
    const [safeToRender, setSafeToRender] = useState(false);

    const API: FetcherFunction = useCallback(async (url = "", init) => {
        try {
            if (init && init.method !== "GET" && init.payload) {
                init.headers = { "Content-Type": "application-json" };
                init.body = JSON.stringify(init.payload);
            }

            setLoading(true);
            const response = await fetch(`${baseUrl}${url}`, init);

            if (response.ok) {
                setData(await response.json());
            }
        } catch (error) {
            if (typeof error === "string") {
                setError(error);
            } else {
                setError("An error has ocurred.");
            }
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (data != null) {
            setSafeToRender(true);
        } else {
            setSafeToRender(false);
        }
    }, [data]);

    return [API, { data, loading, error, safeToRender }] as const;
}
