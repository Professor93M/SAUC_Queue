import React, { useEffect, useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { Visitor } from "@/Layouts/Visitor";
import Button from "@/Components/Button";

export default function Employee({ auth , queue}) {
    const handelClick = () => {
        Inertia.post("/employee", { id: auth.user.id });
    };

    let [counter , setCounter] = useState(queue.queue)




    console.log(queue.queue);
    useEffect(() =>{
        console.log('ffff')
        setCounter(queue.queue)

    },[])

    return (
        <Visitor>
            <div
                style={{ height: "78vh" }}
                dir="rtl"
                className=" flex items-center justify-center text-4xl flex-col space-y-4  "
            >
                <h1>رقم الحاسوب : {auth.user.id}</h1>
                <h1>اسم الموظف : {auth.user.name}</h1>
                <h1> {counter} </h1>
                <Button handelClick={handelClick} type="button">
                    المراجع التالي
                </Button>
            </div>
        </Visitor>
    );
}
