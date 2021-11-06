import React, { useEffect, useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import Button from "@/Components/Button";

export default function Employee({ auth, queueCount }) {
    const playSound = (id) => {
        new Audio("./" + id + ".mp3").play();
    };

    const handelClick = () => {
        Inertia.post("/employee", { id: auth.user.id });
    };

    useEffect(() => {
        playSound(auth.user.id);
    }, [queueCount]);

    setTimeout(() => {
        Inertia.reload();
    }, 10000);

    return (
        <Authenticated auth={auth}>
            <div
                style={{ height: "77vh" }}
                className=" flex items-center justify-center text-4xl flex-col text-gray-700 space-y-4  "
            >
                <h1> عدد المراجعين في الانتظار : {queueCount} </h1>
                <Button
                    handelClick={handelClick}
                    type="button"
                    className="bg-green-500 text-background text-3xl"
                >
                    التالي
                </Button>
            </div>
        </Authenticated>
    );
}
