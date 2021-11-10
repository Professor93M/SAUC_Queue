import React from "react";

export default function ApplicationLogo({ classes }) {
    return (
        <div className={classes}>
            <img
                src="/logo.png"
                className="object-fill w-24 h-24 print:w-20 print:h-20 print:mt-2 print:mb-10 print:mx-auto"
                alt="logo"
                loading="eager"
            />
        </div>
    );
}
