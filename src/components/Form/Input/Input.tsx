import styled from "styled-components";
import Label from "../Label";
import { InputGroup } from "./InputGroup";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledInput = styled.input`
    padding: 0.5rem 0.6rem;
    border: 1px solid ${props => props.theme.color.neutral.gray.light};
    border-radius: 8px;
    font-family: inherit;
    font-size: 0.9rem;

    &:focus-visible,
    &:focus-within {
        outline: 1px solid ${props => props.theme.color.secondary.light};
    }
`;

interface PropsType extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label?: string;
}

const Input: React.FC<PropsType> = ({ label, ...props }) => {
    return (
        <Wrapper>
            {label && <Label htmlFor={props.id}>{label}</Label>}
            <StyledInput {...props} />
        </Wrapper>
    );
};

export default Object.assign(Input, { Group: InputGroup });
