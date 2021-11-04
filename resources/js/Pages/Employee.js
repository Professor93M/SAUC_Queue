import React, { useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import Button from "@/Components/Button";

export default function Employee({ auth }) {
    const handelClick = () => {
        Inertia.post("/", { id: auth.user.id });
    };

    return (
        <Authenticated
            auth={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Employee
                </h2>
            }
        >
            <div
                style={{ height: "78vh" }}
                dir="rtl"
                className=" flex items-center justify-center text-4xl flex-col space-y-4  "
            >
                <h1>رقم الحاسوب : {auth.user.id}</h1>
                <h1>اسم الموظف : {auth.user.name}</h1>
                <Button onClick={handelClick} type="button">
                    المراجع التالي
                </Button>
            </div>
        </Authenticated>
    );
}
