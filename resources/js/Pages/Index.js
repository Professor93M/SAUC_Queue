import React, { useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";

export default function Welcome(props) {
    let [counter, setCounter] = useState(1);

    const handleClick = () => {
        window.print();
        setCounter((counter = counter + 1));
    };
    return (
        <>
            <div className="h-32 w-32">
                <img src="/Logo.png" alt="Logo" />
            </div>
            <h1>جمهورية العراق</h1>
            <h2>وزارة التعليم العالي والبحث العلمي</h2>
            <h2>كلية شط العرب الجامعة الاهلية</h2>

            <p>
                مرحبا بكم في كليتنا يرجى الضغط على الزر ادناه للحصول على رقم
                تسلسل
            </p>
            <h3> {counter} </h3>
            <button onClick={handleClick}>اضغط هنا</button>
        </>
    );
}
