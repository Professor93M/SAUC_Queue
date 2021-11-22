import React, { useEffect, useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { Visitor } from "@/Layouts/Visitor";
import { zIndex } from "tailwindcss/defaultTheme";

export default function Screen({ queue, emp, queueCount }) {
    const playSound = (id) => {
        if (emp) return new Audio(`/${id}.mp3`).play();
    };

    useEffect(() => {
        setInterval(() => {
            Inertia.reload();
        }, 5000);
    }, []);

    if(queue){
        if(localStorage.getItem('voice', queue.updated_at) !== queue.updated_at){
            playSound(emp.id)
            localStorage.setItem('voice', queue.updated_at)
        }
    }

    // queue
    //     ? useEffect(() => {
    //           if (emp != null) return playSound(emp.id);
    //       }, [queue.queue])
    //     : null;

    const renderQueueCountOnly = (queueCount) => {
        if (queueCount) {
            return (
                <div
                    className={`
                ${emp ? "h-auto text-3xl" : "h-64 text-7xl"}
                flex  p-2 col-span-2  px-5 rounded-lg bg-nav text-4xl bg-opacity-20 items-center justify-center mt-10 shadow-lg`}
                >
                    <span className="mx-5">عدد المراجعين في الإنتظار</span>
                    <span className="bg-red-400 rounded-lg text-yellow-100 shadow-lg px-3">
                        {" "}
                        {queueCount === null ? 0 : queueCount}{" "}
                    </span>
                </div>
            );
        } else {
            return (
                <div
                    className={`
                ${emp ? "h-auto text-3xl" : "h-64 text-7xl"}
                flex  p-2 col-span-2  px-5 rounded-lg bg-nav bg-opacity-20 items-center justify-center mt-10 shadow-lg`}
                >
                    <h2> لا يوجد مراجعين في الانتظار </h2>
                </div>
            );
        }
    };

    return (
        <>
            <Head title="التسلسل التالي" />
            <div
                dir="rtl"
                className="flex  text-btn relative items-center z-30 bg-white justify-evenly text-4xl flex-col shadow-lg"
                style={{ height: "100vh" }}
            >
                <div
                    style={{ width: "60rem" }}
                    className=" grid text-5xl grid-cols-2 rounded-sm gap-4 text-center "
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
                    {emp ? (
                        <>
                            <div className="flex flex-col text-4xl py-3 rounded-lg h-44 bg-nav bg-opacity-20 items-center justify-around shadow-lg">
                                رقم الحاسبة
                                <span className="text-5xl bg-btn rounded-lg text-yellow-300 font-extrabold  shadow-lg px-6  py-1">
                                    {" "}
                                    {emp.id}{" "}
                                </span>
                            </div>
                            <div className="flex flex-col text-5xl py-3 rounded-lg h-44 bg-nav bg-opacity-20 items-center justify-around shadow-lg">
                                <h2>{emp.name}</h2>
                            </div>

                            <div className="flex flex-col col-span-2 text-4xl py-3 items-center rounded-lg h-44 bg-nav bg-opacity-20 justify-around shadow-lg">
                                <span>تسلسل المراجع</span>
                                <span className="text-5xl bg-btn rounded-lg text-yellow-300 font-extrabold shadow-lg px-6  py-1">
                                    {queue !== null ? queue.queue : 0}
                                </span>
                            </div>
                        </>
                    ) : (
                        ""
                    )}
                    {renderQueueCountOnly(queueCount)}
                </div>
            </div>
        </>
    );
}
