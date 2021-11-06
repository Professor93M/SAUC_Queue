import React, { useState, useEffect } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { Visitor } from "@/Layouts/Visitor";
import Button from "@/Components/Button";

export default function Welcome({ nextqueue }) {
    let [disabled, setDisabled] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setDisabled(false);
        }, 10000);
    }, [nextqueue]);

    const handelClick = () => {
        window.print();
        setDisabled(true);
        new Audio("./success.mp3").play().then(() => {
            setTimeout(() => {
                Inertia.post("/", { nextqueue });
            }, 7000);
        });
    };

    return (
        <Visitor classes="print:w-20 print:h-20 w-40 h-40">
            <Head title="طلب تسلسل" />
            <div style={{ height: "78vh" }} className=" w-full ">
                <div
                    style={{ height: "60vh" }}
                    className=" space-y-2  flex pt-20 print:pt-4 flex-col print:justify-start print:space-y-6 items-center text-4xl justify-between"
                >
                    <div className="flex flex-col items-center space-y-3">
                        <h1 className="print:text-xl">
                            اهلا بكم في كلية شط العرب
                        </h1>
                        <h2 className=" print:hidden ">
                            يرجى الضغط على الزر للحصول على تسلسل
                        </h2>
                    </div>
                    <h2 className="text-6xl print:text-5xl">
                        <span className=" text-black font-bold rounded-lg p-3">
                            رقم المراجع التالي : {nextqueue}
                        </span>
                    </h2>
                    <Button
                        handelClick={handelClick}
                        type="button"
                        processing={disabled}
                        className=" bg-green-500 print:hidden py-4 text-background text-5xl"
                    >
                        اضغط هنا
                    </Button>
                </div>
            </div>
        </Visitor>
    );
}
