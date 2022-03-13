import "styled-components";

type MediaGeneratorFunction = (type: "up" | "down") => string;

declare module "styled-components" {
    export interface DefaultTheme {
        color: {
            primary: {
                main: string;
                light: string;
            };
            secondary: {
                main: string;
                light: string;
            };
            neutral: {
                white: string;
                black: string;
                gray: {
                    light: string;
                    dark: string;
                };
            };
        };
        breakpoints: {
            desktopSmall: MediaGeneratorFunction;
            tablet: MediaGeneratorFunction;
            mobile: MediaGeneratorFunction;
        };
    }
}
