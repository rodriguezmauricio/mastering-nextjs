import React from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
    text: string;
    onClick: () => void;
    secondary: boolean;
};

const Button = ({ text, onClick, secondary = false }: ButtonProps) => {
    return (
        <button
            className={`${styles.button} ${secondary ? styles["button--secondary"] : ""}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
