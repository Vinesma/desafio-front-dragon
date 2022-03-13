import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Background from "assets/images/dragonBg.jpeg";

export const Wrapper = styled.div`
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

function App() {
    return (
        <Wrapper>
            <Outlet />
        </Wrapper>
    );
}

export default App;
