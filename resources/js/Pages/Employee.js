import React, { useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { Visitor } from "@/Layouts/Visitor";

const Employee = ({ auth }) => {
    const handelClick = () => {
        Inertia.post("/", { id: auth.user.id });
    };

    return (
        <div>
            <button onClick={handelClick}> المراجع التالي </button>
        </div>
    );
};
