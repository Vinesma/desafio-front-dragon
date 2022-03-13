import React, { useMemo } from "react";
import { useTheme } from "styled-components";

type HeadingsType = "1" | "2" | "3" | "4" | "5" | "6";

interface PropsType {
    type: `h${HeadingsType}`;
    colorType?: "PRIMARY" | "SECONDARY";
    center?: boolean;
    children?: string;
}

const Heading: React.FC<PropsType> = ({
    type,
    colorType = "PRIMARY",
    center,
    children,
}) => {
    const theme = useTheme();

    const style: React.CSSProperties = useMemo(() => {
        const colorKey = colorType.toLowerCase() as Exclude<
            keyof typeof theme.color,
            "neutral"
        >;

        return {
            color: theme.color[colorKey].main,
            textAlign: center ? "center" : undefined,
            marginBottom: "1.4rem",
        };
    }, [center, theme, colorType]);

    return React.createElement(type, { style }, children);
};

export default Heading;
