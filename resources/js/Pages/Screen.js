import React, { useEffect, useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Visitor } from "@/Layouts/Visitor";

export default function Screen({ auth, queue }) {
    setTimeout(() => {
        Inertia.reload();
    }, 10000);

    return (
        <Visitor>
            <h1> {queue.queue} </h1>
            <h1> {auth.user.id} </h1>
            <h1> {auth.user.name} </h1>
        </Visitor>
    );
}
