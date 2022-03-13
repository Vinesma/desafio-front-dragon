import { ListHeader, Wrapper } from "./styles";
import Heading from "components/Typography/Heading";
import Button from "components/Form/Button";
import DragonCard from "components/DragonCard";
import Spinner from "components/Spinner";
import useDragonListState from "./hooks/useDragonListState";
import useGoToPage from "hooks/useGoToPage";

const DragonList = () => {
    const [
        { data, loading, safeToRender, isLoggedIn },
        { fetchNewDragons, logout },
    ] = useDragonListState();
    const [{ goToDragonCreation }] = useGoToPage();

    if (isLoggedIn) {
        return (
            <Wrapper>
                <ListHeader>
                    <Heading type="h3">Dragons</Heading>
                    <Button.Group>
                        <Button onClick={goToDragonCreation}>Add Dragon</Button>
                        <Button displayType="SECONDARY" onClick={logout}>
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
                            mode="VIEW"
                            onSuccessfulModification={fetchNewDragons}
                        />
                    ))}
            </Wrapper>
        );
    }

    return null;
};

export default DragonList;
