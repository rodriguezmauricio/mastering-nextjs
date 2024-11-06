"use client";

import styles from "./page.module.css";
import EnvFetcher from "./components/EnvFetcher";
import Button from "./components/Button";
import Card from "./components/Card";
import Login from "./components/Login";
import Counter from "./components/Counter";
import UserProfileFetcher from "./components/UserProfileFetcher";
import PostFetcher from "./components/PostFetcher";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                {/* <EnvFetcher /> */}
                {`${process.env.NEXT_PUBLIC_GREETING}`}
                {/* <Card title="MAGIA DO MAL" content="salad salamaleico macancosappo" /> */}
                <p></p>
                {/* <Login /> */}
                {/* <Counter /> */}
                <p></p>
                {/* <Button onClick={() => console.log("clicado")} text="botao" secondary={false} /> */}
                {/* <UserProfileFetcher /> */}
                <PostFetcher />
            </main>
        </div>
    );
}
