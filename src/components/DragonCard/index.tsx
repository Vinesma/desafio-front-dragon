import Button from "components/Form/Button";
import Input from "components/Form/Input";
import Text from "components/Typography/Text";
import Dragon from "interfaces/Dragon";
import DragonInfo from "./components/DragonInfo";
import useDragonCardState, { CardMode } from "./hooks/useDragonCardState";
import { AlignedWrapper, Form, Wrapper } from "./styles";
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
        {
            currentMode,
            setCardMode,
            setCardToDefaultMode,
            isRemoving,
            toggleRemoveMode,
            editDragon,
            removeDragon,
        },
    ] = useDragonCardState(dragon, mode);

    switch (currentMode) {
        case "DETAILS":
            return (
                <Wrapper>
                    <DragonInfo dragon={dragon} />
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
                    <DragonInfo dragon={dragon} />
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
                        {isRemoving ? (
                            <AlignedWrapper>
                                <Text>Remove?</Text>
                                <Button
                                    onClick={() =>
                                        removeDragon(
                                            dragon.id,
                                            onSuccessfulModification
                                        )
                                    }
                                >
                                    Yes
                                </Button>
                                <Button onClick={toggleRemoveMode}>No</Button>
                            </AlignedWrapper>
                        ) : (
                            <Button
                                displayType="TERTIARY"
                                onClick={toggleRemoveMode}
                            >
                                Remove
                            </Button>
                        )}
                    </Button.Group>
                </Wrapper>
            );
    }
};

export default DragonCard;
