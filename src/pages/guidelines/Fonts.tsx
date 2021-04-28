import React from "react";
import Title from "../../components/title/Title";

import styles from "./sass/Guidelines.module.sass";

type SampleProps = {
    fontFamily: "Righteous" | "Fira sans";
    fontWeight: 400 | 500 | 600;
    size: number;
    text: string;
    hex: "#444444" | "#6d6d6d" | "#181818";
};

function Sample(props: SampleProps) {
    const style = {
        fontFamily: `${props.fontFamily}, sans-serif`,
        fontSize: `${props.size}px`,
        fontWeight: props.fontWeight,
        color: props.hex,
    };

    return (
        <div className={styles.fontSample}>
            <div className={styles.fontSampleText} style={style}>
                {props.text}
            </div>
            <div className={styles.fontSampleCaption}>
                Font family "{props.fontFamily}" with a font size of{" "}
                {props.size}, a weight of {props.fontWeight} and a foreground
                color of {props.hex}
            </div>
        </div>
    );
}

export default function Fonts() {
    return (
        <div>
            <Title>Fonts</Title>
            <Sample
                fontFamily="Righteous"
                size={32}
                fontWeight={400}
                text="Logo"
                hex="#444444"
            />
            <Sample
                fontFamily="Righteous"
                size={24}
                fontWeight={400}
                text="Small Logo"
                hex="#444444"
            />
            <Sample
                fontFamily="Fira sans"
                size={22}
                fontWeight={600}
                text="Title"
                hex="#444444"
            />
            <Sample
                fontFamily="Fira sans"
                size={18}
                fontWeight={500}
                text="Subtitle"
                hex="#444444"
            />
            <Sample
                fontFamily="Fira sans"
                size={15}
                fontWeight={400}
                text="Text"
                hex="#181818"
            />
            <Sample
                fontFamily="Fira sans"
                size={13}
                fontWeight={400}
                text="Caption"
                hex="#6d6d6d"
            />
        </div>
    );
}
