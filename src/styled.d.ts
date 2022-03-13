import "styled-components";

declare module "styled-components" {
    export type MediaFactoryFunction = (type: "up" | "down") => string;
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
            desktopSmall: MediaFactoryFunction;
            tablet: MediaFactoryFunction;
            mobile: MediaFactoryFunction;
        };
    }
}
