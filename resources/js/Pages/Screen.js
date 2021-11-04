import React, { useEffect, useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Visitor } from "@/Layouts/Visitor";

export default function Screen({ auth , queue}) {

    return (
        <Visitor>
            <h1> {queue.queue} </h1>
        </Visitor>
    );
}
