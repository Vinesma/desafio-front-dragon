import "styled-components";

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
    }
}
