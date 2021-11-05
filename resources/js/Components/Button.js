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
                `inline-flex items-center px-4 py-2 text-gray-900 border border-transparent rounded-md font-semibold text-lg  bg-yellow-200  uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150 ${
                    processing && "opacity-25"
                } ` + className
            }
            disabled={processing}
            onClick={handelClick}
        >
            {children}
        </button>
    );
}
