import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 2rem;
    grid-column: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    overflow: auto;

    @media ${props => props.theme.breakpoints.desktopSmall("down")} {
        grid-column: 1 / -1;
        padding: 2rem 3vw;
    }
`;

export const ListHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${props => props.theme.breakpoints.mobile("down")} {
        flex-direction: column;
    }
`;
