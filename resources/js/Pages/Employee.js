import React, { useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import Button from "@/Components/Button";

export default function Employee({ auth, queueCount }) {
    const handelClick = () => {
        new Audio("./" + auth.user.id + ".mp3").play();
        setTimeout(() => {
            Inertia.post("/employee", { id: auth.user.id })
        }, 6000)
    };

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
                <Button handelClick={handelClick} type="button">
                    المراجع التالي
                </Button>
            </div>
        </Authenticated>
    );
}
