import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "views/Login";
import DragonList from "views/DragonList";
import DragonDetail from "views/DragonDetail";
import DragonCreate from "views/DragonCreate";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}>
                    <Route path="dragons" element={<DragonList />}>
                        <Route path=":dragonId" element={<DragonDetail />} />
                    </Route>
                    <Route path="create_dragon" element={<DragonCreate />} />
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
    );
}

export default App;
