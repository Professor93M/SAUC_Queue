import React, { useState, useEffect } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import Button from "@/Components/Button";

export default function Edit({ auth, user }) {
    console.log(user);
    return (
        <Authenticated auth={auth}>
            <Head title="معلومات الموظفين" />
        </Authenticated>
    );
}
