import styled from "styled-components";

export const ButtonGroup = styled.div<{
    column?: boolean;
    align?: "center" | "start" | "end";
}>`
    margin-bottom: 1.4rem;
    display: ${props => (props.column ? "grid" : "flex")};
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: ${props => (props.align ? props.align : "center")};
`;
