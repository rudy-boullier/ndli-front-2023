import React from "react";
import "./Button.css";

type ButtonProps = {
    name: string;
    clicked: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function Button({ name, clicked }: ButtonProps) {
    return (
        <button className={"custom-button"} onClick={clicked}>
            {name}
        </button>
    );
}

export default Button;
