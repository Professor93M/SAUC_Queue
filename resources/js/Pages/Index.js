import React, { useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function Welcome(props) {
    let [counter, setCounter] = useState(props.nextqueue);

    const handelClick = () => {
        Inertia.post("/", {});
        setCounter(props.nextqueue);
    };

    return (
        <div className=" h-screen w-full bg-indigo-300">
            <div className="flex items-center py-2 bg-gray-200 justify-around  m-auto">
                <div className="Logo w-40 h-40">
                    <img src="./logo.png" alt="logo" />
                </div>
                <div className="flex flex-col text-lg items-center justify-center">
                    <h2>جمهورية العراق</h2>
                    <h2>وزارة التعليم العالي والبحث العلمي</h2>
                    <h2>كلية شط العرب الجامعة</h2>
                </div>
            </div>
            <div
                style={{ height: "50vh" }}
                className="text-center flex pt-20 flex-col items-center text-4xl justify-around"
            >
                <h1>اهلا بكم في كلية شط العرب</h1>
                <h2>يرجى الضغط على الزر للحصول على تسلسل</h2>
                <h2> {counter} </h2>
                <button
                    onClick={handelClick}
                    className="py-2 px-4 bg-yellow-200 rounded-md border"
                >
                    اضغط هنا
                </button>
            </div>
        </div>
    );
}
