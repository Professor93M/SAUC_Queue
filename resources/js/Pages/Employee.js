import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import Button from "@/Components/Button";

export default function Employee({ auth, queueCount, voice }) {
    let [disabled, setDisabled] = useState(true);
    const counter = queueCount;

    const handelClick = (e) => {
        setDisabled(true);
        setTimeout(() => {
            setDisabled(false);
        }, 10000);
        Inertia.post("/employee", { id: auth.user.id });
    };

    useEffect(() => {
        if (voice) {
            responsiveVoice.speak(voice, "Arabic Female");
        }
        setTimeout(() => {
            setDisabled(false);
        }, 10000);
    }, [counter]);

    setTimeout(() => {
        Inertia.reload();
    }, 5000);

    return (
        <Authenticated auth={auth}>
            <Head title="الموظف" />
            <div
                style={{ height: "60vh" }}
                className=" flex items-center pt-6 justify-evenly text-6xl flex-col text-gray-700 space-y-4  "
            >
                <h1> عدد المراجعين في الانتظار : {queueCount} </h1>
                {queueCount > 0 ? (
                    <Button
                        handelClick={handelClick}
                        type="button"
                        processing={disabled}
                        disabledClass="bg-gray-400 p-4 text-4xl text-background"
                        className=" py-4 px-6 bg-green-500  text-background text-4xl"
                    >
                        {disabled ? "انتظر قليلاً" : "التالي "}
                    </Button>
                ) : (
                    ""
                )}
            </div>
        </Authenticated>
    );
}
