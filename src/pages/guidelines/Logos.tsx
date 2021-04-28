import React from "react";

import Hex from "../../components/hex/Hex";
import Subtitle from "../../components/subtitle/Subtitle";
import Text from "../../components/text/Text";
import Title from "../../components/title/Title";

import OmegaIcon from "../../assets/logo.png";
import OmegaIconWhite from "../../assets/logo-white.svg";
import OmegaIconRed from "../../assets/logo-red.svg";
import OmegaIconGray from "../../assets/logo-gray.svg";

import styles from "./sass/Guidelines.module.sass";

type LogoProps = {
    background: string;
    foreground: string;
};

function Logo(props: LogoProps) {
    const style = {
        backgroundColor: props.background,
        color: props.foreground,
    };

    return (
        <div className={styles.logoGroup}>
            <div className={styles.logo} style={style}>
                Omega
            </div>
            <Hex text="Background" hex={props.background} />
            <Hex text="Foreground" hex={props.foreground} />
        </div>
    );
}

type IconProps = {
    background: string;
    foreground: string;
    icon: string;
};

function Icon(props: IconProps) {
    const style = {
        width: "110px",
        backgroundColor: props.background,
        color: props.foreground,
    };

    return (
        <div className={styles.logoGroup}>
            <div className={styles.logo} style={style}>
                <img className={styles.iconImg} src={props.icon} alt="Omega" />
            </div>
            <Hex text="Background" hex={props.background} />
            <Hex text="Foreground" hex={props.foreground} />
        </div>
    );
}

export default function Logos() {
    return (
        <div className={styles.logos}>
            <Title>Logos</Title>
            <Subtitle>Normal</Subtitle>
            <Text>
                All logos should use Righteous as a font. Omega uses 3 different
                variations :
            </Text>
            <Logo background="#c53431" foreground="#fafafa" />
            <Logo background="#eeeeee" foreground="#c53431" />
            <Logo background="#eeeeee" foreground="#444444" />
            <Text>
                If you want to use our Omega logo, you should stick with one of
                these 3 logos above. If you really need to change slightly one
                of these, you can contact us and we can examine your request.
            </Text>
            <Text>
                However, if you want to to make a logo for your app, you can use
                the colors you want.
            </Text>

            <Subtitle>Icons</Subtitle>
            <Text>
                The icons are a little more strict. You can only use them with
                these colors, and variations are not allowed without our
                consent. Note: you can right click to download the SVG.
            </Text>
            <Icon
                icon={OmegaIconWhite}
                background="#c53431"
                foreground="#fafafa"
            />
            <Icon
                icon={OmegaIconRed}
                background="#eeeeee"
                foreground="#c53431"
            />
            <Icon
                icon={OmegaIconGray}
                background="#eeeeee"
                foreground="#444444"
            />
            <Text>The red icon can also be used with this shadow:</Text>
            <img
                className={styles.iconWithShadow}
                src={OmegaIcon}
                alt="Omega"
            />
        </div>
    );
}
