import React, { useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { Visitor } from "@/Layouts/Visitor";
import Button from "@/Components/Button";

export default function Employee({ auth }, props) {
    console.log(auth);
    const handelClick = () => {
        Inertia.post("/", { id: auth.user.id });
    };

    return (
        <Visitor>
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
        </Visitor>
    );
}
