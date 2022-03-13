import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { defaultTheme, GlobalStyle } from "theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "App";

const renderWithProviders: React.FC = ({ children }) => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={children} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};

const customRender = (
    ui: React.ReactElement,
    options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: renderWithProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
