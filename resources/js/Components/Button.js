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
                    ? `pointer-events-none px-8 py-2  rounded-md bg-gray-400 ${className}`
                    : `px-8 py-2  rounded-md bg-green-500 text-background ${className}`
            }
            disabled={processing}
            onClick={handelClick}
        >
            {children}
        </button>
    );
}
