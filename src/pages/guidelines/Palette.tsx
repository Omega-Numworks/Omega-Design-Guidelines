import React from "react";
import Text from "../../components/text/Text";
import Title from "../../components/title/Title";

import styles from "./sass/Guidelines.module.sass";

type ColorProps = {
    hex: string;
    foreground: "#fafafa" | "#181818";
};

function Color(props: ColorProps) {
    return (
        <div style={{ backgroundColor: props.hex }} className={styles.color}>
            <span
                className={styles.colorHex}
                style={{ color: props.foreground }}
            >
                {props.hex}
            </span>
        </div>
    );
}

function PaletteLight() {
    return (
        <div className={styles.palette}>
            <Color hex="#c53431" foreground="#fafafa" />
            <Color hex="#3585c0" foreground="#fafafa" />
            <Color hex="#276590" foreground="#fafafa" />
            <Color hex="#eeeeee" foreground="#181818" />
            <Color hex="#444444" foreground="#fafafa" />
        </div>
    );
}

export default function Palette() {
    return (
        <div>
            <Title>Palette</Title>
            <Text>
                This is the original palette. With this, you can also use colors
                from white to black. Only limitation: no #ffffff, no #000000.
            </Text>
            <PaletteLight />
        </div>
    );
}
