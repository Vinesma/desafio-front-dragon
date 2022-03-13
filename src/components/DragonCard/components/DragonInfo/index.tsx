import { datePrettifier } from "components/DragonCard/utils/date";
import Heading from "components/Typography/Heading";
import Text from "components/Typography/Text";
import Dragon from "interfaces/Dragon";

interface PropsType {
    dragon: Dragon;
}

const DragonInfo: React.FC<PropsType> = ({ dragon }) => {
    return (
        <>
            <Heading colorType="SECONDARY" type="h4">
                {dragon.name}
            </Heading>
            <Text>{dragon.type}</Text>
            <Text>{datePrettifier(dragon.createdAt)}</Text>
        </>
    );
};

export default DragonInfo;
