// src/App.js
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import {appPages} from "../AppConfig";

export default function MainAppPage(page){
    return(
        <Routes>
            {appPages.map((page) => (
                <Route key={page.name} path={page.path} element={page.component} />
            ))}
        </Routes>
    )
}