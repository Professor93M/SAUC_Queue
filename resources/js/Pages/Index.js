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
            <div style={{ height: "78vh" }} className=" w-full ">
                <div
                    style={{ height: "60vh" }}
                    className=" space-y-2  flex pt-20 print:pt-4 flex-col print:justify-start print:space-y-6 items-center text-4xl justify-between"
                >
                    <h1 className="print:text-xl">اهلا بكم في كلية شط العرب</h1>
                    <h2 className=" print:hidden ">
                        يرجى الضغط على الزر للحصول على تسلسل
                    </h2>
                    <h2 className="text-6xl print:text-5xl">
                        <span className="bg-nav  print:text-black text-background rounded-lg p-3">
                            رقم المراجع : {nextqueue}
                        </span>
                    </h2>
                    <Button
                        handelClick={handelClick}
                        type="button"
                        className="bg-btn print:hidden text-background text-5xl"
                    >
                        اضغط هنا
                    </Button>
                </div>
            </div>
        </Visitor>
    );
}
