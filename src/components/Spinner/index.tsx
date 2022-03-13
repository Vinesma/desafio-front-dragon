import styled, { keyframes } from "styled-components";
import SpinImage from "assets/images/dragonSpinner.png";

const Spin = keyframes`
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Wrapper = styled.div`
    position: relative;
    width: 120px;
    height: 120px;
    animation: ${Spin} infinite 2s ease;

    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: ${props => props.theme.color.secondary.light}44;
    }
`;

const Spinner = () => {
    return (
        <Wrapper>
            <img
                width={120}
                height={120}
                src={SpinImage}
                alt="Loading spinner"
            />
        </Wrapper>
    );
};

export default Spinner;
