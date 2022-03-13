import Button from "components/Form/Button";
import Input from "components/Form/Input";
import Heading from "components/Typography/Heading";
import Text from "components/Typography/Text";
import Dragon from "interfaces/Dragon";
import useDragonCardState, { CardMode } from "./hooks/useDragonCardState";
import { Form, Wrapper } from "./styles";
import { datePrettifier } from "./utils/date";

interface PropsType {
    dragon: Dragon;
    mode?: CardMode;
    onSuccessfulModification?: () => void;
}

const DragonCard: React.FC<PropsType> = ({
    dragon,
    mode,
    onSuccessfulModification,
}) => {
    const [
        nameInputProps,
        typeInputProps,
        { goToDragonDetail, goToDragonList },
        { currentMode, setCardMode, setCardToDefaultMode, editDragon },
    ] = useDragonCardState(dragon, mode);

    const dragonInfo = (
        <>
            <Heading colorType="SECONDARY" type="h4">
                {dragon.name}
            </Heading>
            <Text>{dragon.type}</Text>
            <Text>{datePrettifier(dragon.createdAt)}</Text>
        </>
    );

    switch (currentMode) {
        case "DETAILS":
            return (
                <Wrapper>
                    {dragonInfo}
                    <Button.Group align="start">
                        <Button
                            displayType="SECONDARY"
                            onClick={goToDragonList}
                        >
                            Back
                        </Button>
                    </Button.Group>
                </Wrapper>
            );
        case "EDIT":
            return (
                <Wrapper>
                    <Form
                        onSubmit={event => {
                            event.preventDefault();
                            editDragon(
                                {
                                    id: dragon.id,
                                    name: nameInputProps.value,
                                    type: typeInputProps.value,
                                },
                                onSuccessfulModification
                            );
                        }}
                    >
                        <Input.Group>
                            <Input
                                id="editNameInput"
                                label="Name"
                                placeholder="Name"
                                required
                                {...nameInputProps}
                            />
                            <Input
                                id="editTypeInput"
                                label="Type"
                                placeholder="Type"
                                required
                                {...typeInputProps}
                            />
                        </Input.Group>
                        <Text>{datePrettifier(dragon.createdAt)}</Text>
                        <Button.Group align="start">
                            <Button type="submit">Save</Button>
                            <Button
                                displayType="SECONDARY"
                                onClick={setCardToDefaultMode}
                            >
                                Cancel
                            </Button>
                        </Button.Group>
                    </Form>
                </Wrapper>
            );
        case "VIEW":
        default:
            return (
                <Wrapper>
                    {dragonInfo}
                    <Button.Group align="start">
                        <Button
                            displayType="PRIMARY"
                            onClick={() => setCardMode("EDIT")}
                        >
                            Edit
                        </Button>
                        <Button
                            displayType="SECONDARY"
                            onClick={() => goToDragonDetail(dragon.id)}
                        >
                            Details
                        </Button>
                        <Button displayType="TERTIARY">Remove</Button>
                    </Button.Group>
                </Wrapper>
            );
    }
};

export default DragonCard;
