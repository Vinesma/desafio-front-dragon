import useFetch from "hooks/useFetch";
import Dragon from "interfaces/Dragon";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

export type CardMode = "VIEW" | "EDIT" | "DETAILS" | "CREATE";
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export default function useDragonCardState(
    dragon?: Dragon,
    cardMode?: CardMode
) {
    const [name, setName] = useState(dragon ? dragon.name : "");
    const [type, setType] = useState(dragon ? dragon.type : "");
    const [isRemoving, setIsRemoving] = useState(false);
    const [currentMode, setCurrentMode] = useState(
        cardMode ? cardMode : "VIEW"
    );
    const [defaultMode] = useState(cardMode ? cardMode : "VIEW");
    const [API] = useFetch();
    const navigate = useNavigate();

    const goToDragonDetail = useCallback(
        (dragonId: Dragon["id"]) => {
            navigate(`/dragons/${dragonId}`);
        },
        [navigate]
    );

    const goToDragonList = useCallback(() => {
        navigate("/dragons");
    }, [navigate]);

    const setCardMode = useCallback((newMode: CardMode) => {
        setCurrentMode(newMode);
    }, []);

    const setCardToDefaultMode = useCallback(() => {
        setCurrentMode(defaultMode);
    }, [defaultMode]);

    const toggleRemoveMode = useCallback(() => {
        setIsRemoving(!isRemoving);
    }, [isRemoving]);

    const createDragon = useCallback(
        async (dragonData: Pick<Dragon, "name" | "type">) => {
            try {
                await API("", { method: "POST", payload: dragonData });
                goToDragonList();
            } catch (error) {
                console.error(error);
            }
        },
        [API, goToDragonList]
    );

    const editDragon = useCallback(
        async (
            dragonData: Pick<Dragon, "id" | "name" | "type">,
            onSuccessfulEdit?: () => void
        ) => {
            try {
                await API(`/${dragonData.id}`, {
                    method: "PUT",
                    payload: { name: dragonData.name, type: dragonData.type },
                });
                setCardToDefaultMode();
                onSuccessfulEdit && onSuccessfulEdit();
            } catch (error) {
                console.error(error);
            }
        },
        [API, setCardToDefaultMode]
    );

    const removeDragon = useCallback(
        async (dragonId: Dragon["id"], onSuccessfulRemove?: () => void) => {
            try {
                await API(`/${dragonId}`, { method: "DELETE" });
                toggleRemoveMode();
                onSuccessfulRemove && onSuccessfulRemove();
            } catch (error) {
                console.error(error);
            }
        },
        [API, toggleRemoveMode]
    );

    return [
        {
            value: name,
            onChange: (e: ChangeEvent) => setName(e.target.value),
        },
        {
            value: type,
            onChange: (e: ChangeEvent) => setType(e.target.value),
        },
        { goToDragonDetail, goToDragonList },
        {
            currentMode,
            setCardMode,
            setCardToDefaultMode,
            isRemoving,
            toggleRemoveMode,
            createDragon,
            editDragon,
            removeDragon,
        },
    ] as const;
}
