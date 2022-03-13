import DragonCard from "components/DragonCard";
import Button from "components/Form/Button";
import Spinner from "components/Spinner";
import Dragon from "interfaces/Dragon";
import useDragonDetailState from "./hooks/useDragonDetailState";
import { Wrapper } from "./styles";

const DragonDetail = () => {
    const [{ data, loading, safeToRender }, { goToDragonList }] =
        useDragonDetailState();

    return (
        <Wrapper>
            {loading && <Spinner />}
            {safeToRender && (
                <DragonCard dragon={data as Dragon}>
                    <Button.Group align="start">
                        <Button
                            displayType="SECONDARY"
                            onClick={goToDragonList}
                        >
                            Back
                        </Button>
                    </Button.Group>
                </DragonCard>
            )}
        </Wrapper>
    );
};

export default DragonDetail;
