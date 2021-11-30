import React, { useEffect } from "react";

export default function ComboBox({ value, name, handleChange, className }) {
    let numbers = [];
    const renderNumbers = () => {
        for (let i = 1; i <= 7; i++) {
            numbers.push(i);
        }
        return numbers;
    };

    renderNumbers();

    return (
        <select
            name={name}
            className={className}
            dir="ltr"
            onChange={handleChange}
            value={value}
        >
            {numbers.map((number) => (
                <option key={number} value={number}>
                    {number}
                </option>
            ))}
        </select>
    );
}
