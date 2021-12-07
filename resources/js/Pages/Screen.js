import React, { useEffect, useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { Visitor } from "@/Layouts/Visitor";
import { zIndex } from "tailwindcss/defaultTheme";

export default function Screen({ queue, emp, queueCount }) {
    const playSound = (PcN) => {
        if (emp) return new Audio(`/${PcN}.mp3`).play();
    };

    useEffect(() => {
        setInterval(() => {
            Inertia.reload();
        }, 5000);
    }, []);

    if (queue) {
        if (
            localStorage.getItem("voice", queue.updated_at) !== queue.updated_at
        ) {
            playSound(emp.PcN);
            localStorage.setItem("voice", queue.updated_at);
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
                className="flex  text-btn relative items-center z-30 bg-white justify-start text-4xl flex-col shadow-lg"
                style={{ height: "100vh" }}
            >
                <div
                    style={{ width: "60rem" }}
                    className=" grid mt-10 text-5xl place-content-start overflow-hidden grid-cols-2 rounded-sm gap-4 text-center "
                >
                    <div
                        style={{
                            zIndex: "-1",
                            opacity: "0.08",
                        }}
                        className="w-screen flex absolute  top-0 bottom-0 overflow-hidden left-0 right-0 items-center justify-center"
                    >
                        <video
                            className="w-screen  pointer-events-none"
                            src="/screenvideo.mp4"
                            autoPlay
                            loop
                            muted
                        />
                    </div>
                    {emp ? (
                        <div className="flex justify-around w-full gap-4 text-6xl  items-center col-span-2 ">
                            <div className="flex flex-col w-1/2 text-6xl py-3 items-center border-2 border-nav rounded-lg h-64 bg-nav bg-opacity-20 justify-around shadow-lg">
                                <span className="">تسلسل المراجع</span>
                                <span className="bg-btn rounded-lg text-yellow-300 font-extrabold shadow-lg px-6  py-1">
                                    {queue !== null ? queue.queue : 0}
                                </span>
                            </div>
                            <div className="flex flex-col py-3 w-1/2 border-2 border-nav   rounded-lg h-64 bg-nav bg-opacity-20 items-center justify-around shadow-lg">
                                <h2>{emp.name}</h2>
                                <span className=" bg-btn rounded-lg text-yellow-300 font-extrabold  shadow-lg px-6  py-1">
                                    حاسبة {emp.PcN}
                                </span>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                    {renderQueueCountOnly(queueCount)}
                </div>
            </div>
        </>
    );
}
