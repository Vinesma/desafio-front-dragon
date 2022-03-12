import styled from "styled-components";
import Background from "assets/images/dragonSculpt.jpg";

export const Wrapper = styled.main`
    display: grid;
    grid-template-columns: 2fr 1fr;
    height: 100vh;
    width: 100vw;
    background-image: url(${Background});
    background-size: cover;
    background-repeat: no-repeat;
`;

export const Form = styled.form`
    grid-column: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${props => props.theme.color.neutral.gray.light};
`;
