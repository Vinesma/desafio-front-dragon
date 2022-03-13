import DragonCard from "components/DragonCard";
import useProtectedRoute from "hooks/useProtectedRoute";
import { Wrapper } from "./styles";

const DragonCreate = () => {
    useProtectedRoute();

    return (
        <Wrapper>
            <DragonCard mode="CREATE" />
        </Wrapper>
    );
};

export default DragonCreate;
