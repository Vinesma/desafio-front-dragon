import styled from "styled-components";

interface PropsType extends React.LabelHTMLAttributes<HTMLLabelElement> {
    children?: string;
}

const StyledLabel = styled.label`
    text-align: left;
    margin-bottom: 0.4rem;
    cursor: pointer;
    color: ${props => props.theme.color.secondary.main};
    font-family: inherit;
    font-size: 1rem;
`;

const Label: React.FC<PropsType> = ({ children, ...props }) => {
    return <StyledLabel {...props}>{children}</StyledLabel>;
};

export default Label;
