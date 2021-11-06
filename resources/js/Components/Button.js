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
            className={`px-8 py-4 rounded-md ${className}`}
            disabled={processing}
            onClick={handelClick}
        >
            {children}
        </button>
    );
}
