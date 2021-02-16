import React from "react";
import "./button.scss";
const Button = (props) => {
    const { className, action, textBtn, payload } = props;
    return (
        <button
            className={className}
            onClick={() => {
                action(payload);
            }}
        >
            {textBtn}
        </button>
    );
};

export default Button;
