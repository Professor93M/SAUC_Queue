import React, { useEffect, useRef } from "react";

export default function Input({
    type = "text",
    name,
    value,
    className,
    autoComplete,
    required,
    isFocused,
    handleChange,
    placeholder,
    handleFocus,
    handleBlur,
    checked,
    // handleCheked,
    handleClick,
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                className={
                    `border-gray-300 border rounded-md shadow-sm ` + className
                }
                ref={input}
                placeholder={placeholder}
                autoComplete={autoComplete}
                required={required}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onClick={handleClick}
                value={type === "checkBox" ? !value : value}
                defaultChecked={checked}
            />
        </div>
    );
}
