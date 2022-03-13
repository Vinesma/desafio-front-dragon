import styled from "styled-components";
import Background from "assets/images/dragonBg.jpeg";

export const Wrapper = styled.main`
    display: grid;
    grid-template-columns: 2fr 1fr;
    height: 100vh;
    width: 100vw;
    background-image: ${props => `
        linear-gradient(
            ${props.theme.color.secondary.light}22,
            ${props.theme.color.secondary.light}aa
        ),
    `}
        url(${Background});
    background-size: cover;
    background-repeat: no-repeat;

    @media ${props => props.theme.breakpoints.tablet("down")} {
        background-position-x: left 20%;
    }
`;

export const InnerWrapper = styled.div`
    grid-column: 2;
    display: grid;
    place-items: center;

    @media ${props => props.theme.breakpoints.desktopSmall("down")} {
        grid-column: 1 / -1;
    }
`;

export const Form = styled.form`
    padding: 1.5rem;
    border-radius: 8px;
    background-color: ${props => props.theme.color.neutral.white};

    & > *:last-child {
        margin-bottom: 0;
    }
`;
