import React from "react";
import styles from "./Card.module.scss";

type CardProps = {
    title: string;
    content: string;
};

const Card = ({ title, content }: CardProps) => (
    <div className={styles.card}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardContent}>{content}</p>
    </div>
);

export default Card;
