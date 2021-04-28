import React from "react";

import styles from "./sass/Title.module.sass";

type TitleProps = React.HTMLProps<HTMLHeadingElement>;

export default function Title(props: TitleProps) {
    return (
        <h2 {...props} className={styles.title}>
            {props.children}
        </h2>
    );
}
