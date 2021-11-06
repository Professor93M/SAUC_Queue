import React from "react";

export default function ApplicationLogo({ classes }) {
    return (
        <div className={classes}>
            <img
                src="/logo.png"
                className="object-fill w-24 h-24 print:w-9 print:h-9"
                alt="logo"
            />
        </div>
    );
}
