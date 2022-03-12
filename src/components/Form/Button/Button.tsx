import styled from "styled-components";
import { ButtonGroup } from "./ButtonGroup";

type ButtonType = "PRIMARY" | "SECONDARY";

interface PropsType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    displayType?: ButtonType;
    children?: React.ReactNode;
}

const StyledButton = styled.button<{ displayType: ButtonType }>`
    padding: 0.5rem 1rem;
    border: ${({ theme, displayType }) =>
        displayType === "PRIMARY"
            ? "0"
            : `2px solid ${theme.color.secondary.main}`};
    border-radius: 8px;
    color: ${({ theme, displayType }) =>
        displayType === "PRIMARY"
            ? theme.color.neutral.white
            : theme.color.secondary.main};
    background-color: ${({ theme, displayType }) =>
        displayType === "PRIMARY" ? theme.color.primary.main : "transparent"};
    font-weight: bold;
    cursor: pointer;
    font-family: inherit;

    &:focus-within {
        outline: 1px solid
            ${({ theme, displayType }) =>
                displayType === "PRIMARY"
                    ? theme.color.primary.light
                    : theme.color.secondary.main};
    }
`;

const Button: React.FC<PropsType> = ({
    children,
    displayType = "PRIMARY",
    ...props
}) => {
    return (
        <StyledButton displayType={displayType} {...props}>
            {children}
        </StyledButton>
    );
};

export default Object.assign(Button, { Group: ButtonGroup });
