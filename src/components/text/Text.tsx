import React from "react";

import styles from "./sass/Text.module.sass";

export default function Text(props: React.HTMLProps<HTMLParagraphElement>) {
    return (
        <p {...props} className={styles.p}>
            {props.children}
        </p>
    );
}
