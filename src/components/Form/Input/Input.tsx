import styled from "styled-components";
import Label from "../Label";
import { InputGroup } from "./InputGroup";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledInput = styled.input`
    padding: 0.4rem 0.5rem;
    border: 1px solid blanchedalmond;
    border-radius: 8px;
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
