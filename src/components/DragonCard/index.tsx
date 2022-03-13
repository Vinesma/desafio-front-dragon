import Heading from "components/Typography/Heading";
import Text from "components/Typography/Text";
import Dragon from "interfaces/Dragon";
import { Wrapper } from "./styles";

interface PropsType {
    dragon: Dragon;
}

const datePrettifier = (timestamp: string) => {
    try {
        const date = new Date(timestamp);

        return date.toLocaleString();
    } catch (error) {
        return "";
    }
};

const DragonCard: React.FC<PropsType> = ({ dragon, children }) => {
    return (
        <Wrapper>
            <Heading colorType="SECONDARY" type="h4">
                {dragon.name}
            </Heading>
            <Text>{dragon.type}</Text>
            <Text>{datePrettifier(dragon.createdAt)}</Text>
            {children}
        </Wrapper>
    );
};

export default DragonCard;
