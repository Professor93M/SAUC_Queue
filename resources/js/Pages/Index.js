import React, { useState, useEffect } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { Visitor } from "@/Layouts/Visitor";
import Button from "@/Components/Button";

export default function Welcome({ nextqueue }) {
    useEffect(() => {
        // new Audio("./welcome.m4a").play();
        // setInterval(new Audio("./welcome.m4a").play(), 20000);
    });

    const handelClick = () => {
        window.print();
        new Audio("./success.mp3").play().then(() => {
            setTimeout(() => {
                Inertia.post("/", { nextqueue });
            }, 7000);
        });
    };

    return (
        <Visitor classes="print:w-20 print:h-20 w-40 h-40">
            <div style={{ height: "78vh" }} className=" w-full bg-indigo-300">
                <div
                    style={{ height: "50vh" }}
                    className="text-center  space-y-2  flex pt-20 flex-col items-center text-4xl justify-around"
                >
                    <h1>اهلا بكم في كلية شط العرب</h1>
                    <h2 className=" print:hidden ">
                        يرجى الضغط على الزر للحصول على تسلسل
                    </h2>
                    <h2 className="text-6xl mb-2 pb-2">
                        <span className="bg-gray-400 rounded-lg p-3">
                            رقم المراجع : {nextqueue}
                        </span>
                    </h2>
                    <Button
                        handelClick={handelClick}
                        type="button"
                        className=""
                    >
                        اضغط هنا
                    </Button>
                </div>
            </div>
        </Visitor>
    );
}
