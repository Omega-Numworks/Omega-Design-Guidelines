import React from "react";

import styles from "./sass/Subtitle.module.sass";

type SubtitleProps = React.HTMLProps<HTMLHeadingElement>;

export default function Subtitle(props: SubtitleProps) {
    return (
        <h2 {...props} className={styles.subtitle}>
            {props.children}
        </h2>
    );
}
