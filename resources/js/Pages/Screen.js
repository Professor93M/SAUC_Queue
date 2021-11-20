import React, { useEffect, useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { Visitor } from "@/Layouts/Visitor";
import { zIndex } from "tailwindcss/defaultTheme";

export default function Screen({ queue, emp, queueCount }) {
    setTimeout(() => {
        Inertia.reload();
    }, 2000);

    // useEffect(() => {
    //     new Audio("/success.mp3").play();
    // }, [queue.queue]);

    const renderQueueCountOnly = (queueCount) => {
        if (queueCount !== null) {
            return (
                <div
                    className={` ${
                        emp ? "col-span-1" : "col-span-2"
                    } flex flex-col p-2  px-5 rounded-lg bg-nav text-6xl bg-opacity-20 items-center justify-around h-64 `}
                >
                    <h2 className="w-full">عدد المراجعين في الإنتظار</h2>
                    <span className="text-7xl">
                        {" "}
                        {queueCount === null ? 0 : queueCount}{" "}
                    </span>
                </div>
            );
        } else {
            return <h2> لا يوجد مراجعين في الانتظار </h2>;
        }
    };

    return (
        <>
            <Head title="التسلسل التالي" />
            <div
                dir="rtl"
                className="flex  text-btn relative items-center z-30 bg-white justify-evenly text-4xl flex-col "
                style={{ height: "100vh" }}
            >
                <div
                    style={{ width: "60rem" }}
                    className=" h-3/4 grid text-5xl grid-cols-2 rounded-sm gap-16   text-center "
                >
                    <div
                        style={{ zIndex: "-1", opacity: "0.08" }}
                        className="w-full h-full  flex absolute  top-0 bottom-0 left-0 right-0 items-center justify-center"
                    >
                        <img
                            className="filter h-full "
                            src="/logo.png"
                            alt="logo"
                        />
                    </div>
                    {renderQueueCountOnly(queueCount)}
                    {emp ? (
                        <>
                            <div className="flex flex-col text-6xl py-3 items-center rounded-lg h-64 bg-nav bg-opacity-20 justify-around">
                                <h2>
                                    رقم المراجع <br /> الحالي
                                </h2>
                                <span className="text-7xl">
                                    {" "}
                                    {queue.queue}{" "}
                                </span>
                            </div>

                            <div className="flex flex-col col-span-2 text-6xl py-3 rounded-lg h-64 bg-nav bg-opacity-20 items-center justify-around">
                                <h2>
                                    الموظف <br /> {emp.name}
                                </h2>
                                <span className="text-7xl">
                                    {" "}
                                    رقم الحاسبة : {emp.id}{" "}
                                </span>
                            </div>
                        </>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </>
    );
}
