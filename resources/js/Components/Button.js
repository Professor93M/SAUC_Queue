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
                    ? `pointer-events-none rounded-md ${disabledClass}`
                    : `  rounded-md  text-background ${className}`
            }
            disabled={processing}
            onClick={handelClick}
        >
            {children}
        </button>
    );
}
