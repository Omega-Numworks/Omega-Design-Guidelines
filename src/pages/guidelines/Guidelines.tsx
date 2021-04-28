import React from "react";

import Logo from "../../components/logo/Logo";
import Fonts from "./Fonts";
import Introduction from "./Introduction";
import Logos from "./Logos";
import Palette from "./Palette";

import styles from "./sass/Guidelines.module.sass";
import Vercel from "./Vercel";

export default function Guidelines() {
    return (
        <div className={styles.content}>
            <Logo />
            <Introduction />
            <Logos />
            <Palette />
            <Fonts />
            <Vercel />
        </div>
    );
}
