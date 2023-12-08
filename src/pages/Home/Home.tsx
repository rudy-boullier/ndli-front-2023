import React from "react";
import "./Home.css";

import HomeMainContainer from "./HomeMainContainer.tsx";

const Home: React.FC = () => {
    return (
        <div id="home">
            <section className="hero-banner">
                <HomeMainContainer />
            </section>
        </div>
    );
};

export default Home;
