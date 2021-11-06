import React from "react";

export default function ApplicationLogo({ classes }) {
    return (
        <div className={classes}>
            <img
                src="/logo.png"
                className="object-fill w-20 h-20 print:w-9 print:h-10"
                alt="logo"
            />
        </div>
    );
}
