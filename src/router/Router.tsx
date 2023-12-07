import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home/Home";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

import QuestionPage from "../pages/Question/questionPage.tsx";

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <main>
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"*"} element={<PageNotFound />} />
                    <Route path={"/question"} element={<QuestionPage />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default Router;
