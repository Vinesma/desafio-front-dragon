import styled from "styled-components";

export const Wrapper = styled.div`
    grid-column: 1 / -1;
    display: grid;
    place-items: center;

    & > * {
        max-width: 50vw;
    }

    @media ${props => props.theme.breakpoints.tablet("down")} {
        padding: 1rem 3vw;

        & > * {
            max-width: 100%;
        }
    }
`;
