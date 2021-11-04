import React, { useEffect, useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Visitor } from "@/Layouts/Visitor";

export default function Screen({ auth, queue }) {
    setTimeout(() => {
        Inertia.reload();
    }, 10000);

    return (
        <Visitor>
            <div
                className=" flex items-center justify-center text-4xl flex-col space-y-4  "
                style={{ height: "78vh" }}
            >
                <h1> عدد المراجعين : {queue.queue} </h1>
                <h1> رقم الحاسبه : {auth.user.id} </h1>
                <h1> اسم الموظف : {auth.user.name} </h1>
            </div>
        </Visitor>
    );
}
