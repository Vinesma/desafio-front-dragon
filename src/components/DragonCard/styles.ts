import styled, { keyframes } from "styled-components";

const CardSlide = keyframes`
    0% {
        opacity: 0;
        transform: translateX(20px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    };
`;

export const Wrapper = styled.div`
    padding: 1rem;
    border-radius: 8px;
    width: 100%;
    background-color: ${props => props.theme.color.neutral.white};
    animation: ${CardSlide} 400ms 1 ease-out;

    & > *:last-child {
        margin-top: 1rem;
        margin-bottom: 0;
    }
`;
