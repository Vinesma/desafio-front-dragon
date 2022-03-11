import styled from "styled-components";

interface PropsType extends React.LabelHTMLAttributes<HTMLLabelElement> {
    children?: string;
}

const StyledLabel = styled.label`
    text-align: left;
`;

const Label: React.FC<PropsType> = ({ children, ...props }) => {
    return <StyledLabel {...props}>{children}</StyledLabel>;
};

export default Label;
