import { useMemo } from "react";

interface PropsType {
    children?: string;
    center?: boolean;
}

const Text: React.FC<PropsType> = ({ children, center }) => {
    const style: React.CSSProperties = useMemo(() => {
        return {
            fontSize: "1em",
            fontFamily: "inherit",
            textAlign: center ? "center" : undefined,
        };
    }, [center]);

    return <p style={style}>{children}</p>;
};

export default Text;
