import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import { defaultTheme, GlobalStyle } from "theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "views/Login";
import DragonList from "views/DragonList";
import DragonDetail from "views/DragonDetail";
import DragonCreate from "views/DragonCreate";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<Login />} />
                        <Route path="dragons" element={<DragonList />}></Route>
                        <Route
                            path="dragons/:dragonId"
                            element={<DragonDetail />}
                        />
                        <Route
                            path="create_dragon"
                            element={<DragonCreate />}
                        />
                        <Route
                            path="*"
                            element={
                                <main>
                                    <p>Here be no dragons!</p>
                                </main>
                            }
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
