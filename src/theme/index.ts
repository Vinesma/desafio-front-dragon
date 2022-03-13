import {
    createGlobalStyle,
    DefaultTheme,
    MediaFactoryFunction,
} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
`;

const breakpointFactory =
    (type: Parameters<MediaFactoryFunction>[0]) => (size: number) =>
        `(${type === "up" ? "min" : "max"}-width: ${size}px)`;

export const defaultTheme: DefaultTheme = {
    color: {
        primary: {
            main: "#d00000",
            light: "#fd2e2e",
        },
        secondary: {
            main: "#f48c06",
            light: "#ffc75b",
        },
        neutral: {
            white: "#FFF",
            black: "#000",
            gray: {
                light: "#edede9",
                dark: "#b7b7b7",
            },
        },
    },
    breakpoints: {
        desktopSmall: type => breakpointFactory(type)(1000),
        tablet: type => breakpointFactory(type)(810),
        mobile: type => breakpointFactory(type)(480),
    },
};
