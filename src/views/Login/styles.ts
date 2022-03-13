import styled from "styled-components";

export const Wrapper = styled.div`
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
