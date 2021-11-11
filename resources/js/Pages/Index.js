import React, { useState, useEffect } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { Visitor } from "@/Layouts/Visitor";
import Button from "@/Components/Button";
import moment from "moment";

export default function Welcome({ nextqueue, wait }) {
    let [disabled, setDisabled] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setDisabled(false);
        }, 10000);
    }, [nextqueue]);

    const handelClick = () => {
        responsiveVoice.speak(
            " شكراً لكم لزيارة كلية شط العرب الجامعةْ ........ , سيتم طباعة تسلسلكَ " +
                nextqueue +
                "يرجى الانتظارْ",
            "Arabic Female",
            { volume: 1 }
        );
        window.print();
        setDisabled(true);

        Inertia.post("/", { nextqueue });
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
                        <h1 className="print:text-sm print:mt-2 print:text-black">
                            اهلا بكم في كلية شط العرب الجامعة
                        </h1>
                        <h2 className=" print:hidden ">
                            يرجى الضغط على الزر للحصول على تسلسل
                        </h2>
                    </div>
                    <h2 className="text-6xl print:hidden">
                        <span className=" text-black font-bold rounded-lg p-3">
                            رقم المراجع التالي  {nextqueue}
                        </span>
                    </h2>
                    <h2 className="hidden print:block print:text-4xl mb-3 print:text-center">
                        <span className=" text-black font-bold rounded-lg p-3">
                            ( {nextqueue} )
                        </span>
                    </h2>
                    <p dir="ltr" className="hidden print:block ml-auto text-sm">
                        <span className=" text-black">
                            {moment().format('YYYY/MM/DD - hh:mm:ss a')}
                        </span>
                    </p>
                    <Button
                        handelClick={handelClick}
                        type="button"
                        processing={disabled}
                        disabledClass="bg-gray-400 print:hidden p-4 text-5xl text-background"
                        className="  print:hidden p-4 bg-green-500 text-background text-5xl"
                    >
                        {disabled ? "انتظر قليلاً" : "اضغط هنا"}
                    </Button>
                </div>
            </div>
        </Visitor>
    );
}
