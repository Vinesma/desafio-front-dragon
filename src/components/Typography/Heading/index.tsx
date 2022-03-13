import React, { useMemo } from "react";
import { useTheme } from "styled-components";

type HeadingsType = "1" | "2" | "3" | "4" | "5" | "6";

interface PropsType {
    type: `h${HeadingsType}`;
    center?: boolean;
    children?: string;
}

const Heading: React.FC<PropsType> = ({ type, center, children }) => {
    const theme = useTheme();

    const style: React.CSSProperties = useMemo(() => {
        return {
            color: theme.color.primary.main,
            textAlign: center ? "center" : undefined,
            marginBottom: "1.4rem",
        };
    }, [center, theme.color.primary.main]);

    return React.createElement(type, { style }, children);
};

export default Heading;
