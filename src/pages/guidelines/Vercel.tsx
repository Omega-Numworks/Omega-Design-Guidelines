import React from "react";

import VercelIcon from "./../../assets/powered-by-vercel.svg";

export default function Vercel() {
    return (
        <div
            style={{
                marginTop: "24px",
                paddingTop: "24px",
                borderTop: "1px solid #eee",
            }}
        >
            <a
                href="https://vercel.com/?utm_source=getomega&utm_campaign=oss"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={VercelIcon} alt="Vercel" />
            </a>
        </div>
    );
}
