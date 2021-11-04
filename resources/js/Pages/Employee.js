import React, { useEffect, useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { Visitor } from "@/Layouts/Visitor";
import Button from "@/Components/Button";

export default function Employee({ auth, queueCount }) {
    const handelClick = () => {
        Inertia.post("/employee", { id: auth.user.id });
    };

    console.log(queueCount);

    return (
        <Visitor>
            <div
                style={{ height: "78vh" }}
                dir="rtl"
                className=" flex items-center justify-center text-4xl flex-col space-y-4  "
            >
                <h1> عدد المراجعين في الانتظار : {queueCount} </h1>
                <Button handelClick={handelClick} type="button">
                    المراجع التالي
                </Button>
            </div>
        </Visitor>
    );
}
