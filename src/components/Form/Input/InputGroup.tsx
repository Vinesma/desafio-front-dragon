import styled from "styled-components";

export const InputGroup = styled.div<{ row?: boolean }>`
    margin-bottom: 1.4rem;
    display: ${props => (props.row ? "flex" : "grid")};
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    gap: 1rem;
    flex-wrap: wrap;
`;
