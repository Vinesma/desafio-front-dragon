import Button from "components/Form/Button";
import Input from "components/Form/Input";
import Heading from "components/Typography/Heading";
import Text from "components/Typography/Text";
import Dragon from "interfaces/Dragon";
import DragonInfo from "./components/DragonInfo";
import useDragonCardState, { CardMode } from "./hooks/useDragonCardState";
import { AlignedWrapper, Form, Wrapper } from "./styles";
import { datePrettifier } from "./utils/date";

interface PropsType {
    onSuccessfulModification?: () => void;
    mode?: CardMode;
}

interface PropsCreate extends PropsType {
    dragon?: never;
    mode: Extract<CardMode, "CREATE">;
}

interface PropsNoCreate extends PropsType {
    dragon: Dragon;
    mode: Exclude<CardMode, "CREATE">;
}

const DragonCard: React.FC<PropsCreate | PropsNoCreate> = ({
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
            createDragon,
            editDragon,
            removeDragon,
        },
    ] = useDragonCardState(dragon, mode);

    switch (currentMode) {
        case "CREATE":
            return (
                <Wrapper>
                    <Heading type="h3">New Dragon</Heading>
                    <Form
                        onSubmit={event => {
                            event.preventDefault();
                            createDragon({
                                name: nameInputProps.value,
                                type: typeInputProps.value,
                            });
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
                        <Button.Group align="start">
                            <Button type="submit">Create</Button>
                            <Button
                                displayType="SECONDARY"
                                onClick={goToDragonList}
                            >
                                Cancel
                            </Button>
                        </Button.Group>
                    </Form>
                </Wrapper>
            );
        case "DETAILS":
            return (
                <Wrapper>
                    <Heading type="h3">Details</Heading>
                    <DragonInfo dragon={dragon as Dragon} />
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
                                    id: (dragon as Dragon).id,
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
                        <Text>
                            {datePrettifier((dragon as Dragon).createdAt)}
                        </Text>
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
                    <DragonInfo dragon={dragon as Dragon} />
                    <Button.Group align="start">
                        <Button
                            displayType="PRIMARY"
                            onClick={() => setCardMode("EDIT")}
                        >
                            Edit
                        </Button>
                        <Button
                            displayType="SECONDARY"
                            onClick={() =>
                                goToDragonDetail((dragon as Dragon).id)
                            }
                        >
                            Details
                        </Button>
                        {isRemoving ? (
                            <AlignedWrapper>
                                <Text>Remove?</Text>
                                <Button
                                    onClick={() =>
                                        removeDragon(
                                            (dragon as Dragon).id,
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
