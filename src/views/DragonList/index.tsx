import useFetch from "hooks/useFetch";
import Dragon from "interfaces/Dragon";
import { useEffect } from "react";

const DragonList = () => {
    const [API, { data, safeToRender }] = useFetch<Dragon[]>();

    useEffect(() => {
        API();
    }, [API]);

    return (
        <div>
            {safeToRender &&
                data?.map(dragon => (
                    <>
                        <h4>{dragon.name}</h4>
                        <p>{dragon.type}</p>
                    </>
                ))}
        </div>
    );
};

export default DragonList;
