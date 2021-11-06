import React from "react";

export default function Button({
    type = "submit",
    className = "",
    processing,
    handelClick,
    children,
}) {
    return (
        <button
            type={type}
            className={
                processing
                    ? `pointer-events-none   rounded-md bg-gray-400 p-4 text-background`
                    : `  rounded-md  text-background ${className}`
            }
            disabled={processing}
            onClick={handelClick}
        >
            {children}
        </button>
    );
}
