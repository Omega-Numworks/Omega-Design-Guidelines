import React from "react";

import styles from "./sass/Logo.module.sass";

export default function Logo() {
    return (
        <h1 className={styles.logo}>
            Omega Design
            <span style={{ fontSize: "12px", marginLeft: "4px" }}>BETA</span>
        </h1>
    );
}
