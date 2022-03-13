import DragonCard from "components/DragonCard";
import Spinner from "components/Spinner";
import Dragon from "interfaces/Dragon";
import useDragonDetailState from "./hooks/useDragonDetailState";
import { Wrapper } from "./styles";

const DragonDetail = () => {
    const [{ data, loading, safeToRender }] = useDragonDetailState();

    return (
        <Wrapper>
            {loading && <Spinner />}
            {safeToRender && (
                <DragonCard mode="DETAILS" dragon={data as Dragon} />
            )}
        </Wrapper>
    );
};

export default DragonDetail;
