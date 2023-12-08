import { useState } from "react";

import "./Header.css";
import gear from "../../assets/gear.svg";
import leaf from "../../assets/Leaf_icon.svg";
import Button from "../../components/Button/Button";
import "../../font/OpenDyslexicAlta-Regular.otf";

function Header() {
    const [isClose, setIsClose] = useState(false);
    const [isMonochromacy, setMonochromacy] = useState(false);
    const [isDichromacy, setDichromacy] = useState(false);
    const [isTrichromacy, setTrichromacy] = useState(false);
    const [isDyslexie, setDyslexie] = useState(false);

    const toggleNav = () => setIsClose(!isClose);
    const hadleMonochromacy = () => setMonochromacy(!isMonochromacy);
    const hadleDichromacy = () => setDichromacy(!isDichromacy);
    const hadleTrichromacy = () => setTrichromacy(!isTrichromacy);
    const hadleDyslexie = () => {
        setDyslexie(!isDyslexie);

        const bodyElement = document.body;

        if (bodyElement.style.fontFamily === "Arial") {
            bodyElement.style.fontFamily = "OpenDyslexicRegular";
        } else {
            bodyElement.style.fontFamily = "Arial";
        }
    };

    return (
        <div className={"header"}>
            <div className="icon">
                <img src={leaf} alt="icon leaf accessibilité" />
            </div>

            <div className="gear">
                <button
                    type="button"
                    className="button-gear"
                    onClick={toggleNav}
                >
                    <img src={gear} alt="icon gear accessibilité" />
                </button>

                <div className={`gear-content ${isClose ? "" : "open"}`}>
                    <section>
                        <h1>Couleurs</h1>
                        <div className="color-change">
                            <p>Monochromacy</p>
                            <div className="option-button">
                                <Button
                                    name={isMonochromacy ? "ON" : "OFF"}
                                    clicked={hadleMonochromacy}
                                />
                            </div>
                        </div>
                        <div className="color-change">
                            <p>Dichromacy</p>
                            <div className="option-button">
                                <Button
                                    name={isDichromacy ? "ON" : "OFF"}
                                    clicked={hadleDichromacy}
                                />
                            </div>
                        </div>
                        <div className="color-change">
                            <p>Trichromacy</p>
                            <div className="option-button">
                                <Button
                                    name={isTrichromacy ? "ON" : "OFF"}
                                    clicked={hadleTrichromacy}
                                />
                            </div>
                        </div>
                    </section>
                    <section>
                        <h1>Font</h1>
                        <div className="color-change">
                            <p>dyslexie</p>
                            <div className="option-button">
                                <Button
                                    name={isDyslexie ? "ON" : "OFF"}
                                    clicked={hadleDyslexie}
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Header;
