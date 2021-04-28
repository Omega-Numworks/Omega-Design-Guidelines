import React from "react";

import styles from "./sass/Hex.module.sass";

type HexProps = {
    hex: string;
    text?: string;
};

export default function Hex(props: HexProps) {
    var preContent = <React.Fragment />;

    if (props.text) {
        preContent = <span className={styles.hexPre}>{props.text}</span>;
    }

    return (
        <div className={styles.hex}>
            {preContent}
            <span
                className={styles.hexColor}
                style={{ backgroundColor: props.hex }}
            />
            <span className={styles.hexText}>{props.hex}</span>
        </div>
    );
}
