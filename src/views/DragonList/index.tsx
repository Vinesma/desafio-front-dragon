import { ListHeader, Wrapper } from "./styles";
import Heading from "components/Typography/Heading";
import Button from "components/Form/Button";
import DragonCard from "components/DragonCard";
import Spinner from "components/Spinner";
import useDragonListState from "./hooks/useDragonListState";

const DragonList = () => {
    const [
        { data, loading, safeToRender },
        { goToLogin, goToDragonCreation },
        { fetchNewDragons },
    ] = useDragonListState();

    return (
        <Wrapper>
            <ListHeader>
                <Heading type="h3">Dragons</Heading>
                <Button.Group>
                    <Button onClick={goToDragonCreation}>Add Dragon</Button>
                    <Button displayType="SECONDARY" onClick={goToLogin}>
                        Logout
                    </Button>
                </Button.Group>
            </ListHeader>
            {loading && <Spinner />}
            {safeToRender &&
                data?.map(dragon => (
                    <DragonCard
                        key={dragon.id}
                        dragon={dragon}
                        onSuccessfulModification={fetchNewDragons}
                    />
                ))}
        </Wrapper>
    );
};

export default DragonList;
