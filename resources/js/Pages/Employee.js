import React, { useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import Button from "@/Components/Button";

<<<<<<< HEAD
export default function Employee({ auth, queueCount }) {
=======
export default function Employee({ auth }) {
>>>>>>> 7a5a8fafaaad37d89247d7ea78fa85b6861c6acb
    const handelClick = () => {
        Inertia.post("/", { id: auth.user.id });
    };

<<<<<<< HEAD
    console.log(queueCount);

=======
>>>>>>> 7a5a8fafaaad37d89247d7ea78fa85b6861c6acb
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
<<<<<<< HEAD
                <h1> عدد المراجعين في الانتظار : {queueCount} </h1>
                <Button handelClick={handelClick} type="button">
=======
                <h1>رقم الحاسوب : {auth.user.id}</h1>
                <h1>اسم الموظف : {auth.user.name}</h1>
                <Button onClick={handelClick} type="button">
>>>>>>> 7a5a8fafaaad37d89247d7ea78fa85b6861c6acb
                    المراجع التالي
                </Button>
            </div>
        </Authenticated>
    );
}
