import React, { useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { Visitor } from "@/Layouts/Visitor";

export default function Welcome(props) {
    let [counter, setCounter] = useState(props.nextqueue);

    const handelClick = () => {
        Inertia.post("/", {});
        setCounter(props.nextqueue);
    };

    return (
        <Visitor>
            <div style={{ height: "78vh" }} className=" w-full bg-indigo-300">
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
        </Visitor>
    );
}
