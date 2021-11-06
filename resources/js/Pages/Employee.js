import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import Button from "@/Components/Button";

export default function Employee({ auth, queueCount }) {
    let [disabled, setDisabled] = useState(true);
    const counter = queueCount;
    const playSound = (id) => {
        new Audio("./" + id + ".mp3").play();
    };

    const handelClick = (e) => {
        setDisabled(false);
        Inertia.post("/employee", { id: auth.user.id });
    };

    useEffect(() => {
        playSound(auth.user.id);
        setTimeout(() => {
            setDisabled(false);
        }, 10000);
    }, [counter]);

    setTimeout(() => {
        Inertia.reload();
    }, 10000);

    return (
        <Authenticated auth={auth}>
            <Head title="الموظف" />
            <div
                style={{ height: "60vh" }}
                className=" flex items-center pt-6 justify-evenly text-6xl flex-col text-gray-700 space-y-4  "
            >
                <h1> عدد المراجعين في الانتظار : {queueCount} </h1>
                <Button
                    handelClick={handelClick}
                    type="button"
                    processing={disabled}
                    className=" py-4 px-6 bg-green-500  text-background text-4xl"
                >
                    {disabled ? "انتظر قليلاً" : "التالي "}
                </Button>
            </div>
        </Authenticated>
    );
}
