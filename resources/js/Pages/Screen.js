import React, { useEffect, useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { Visitor } from "@/Layouts/Visitor";

export default function Screen({ emp, queue }) {
    setTimeout(() => {
        Inertia.reload();
    }, 2000);
    useEffect(() => {
        if(queue){
            if (
                localStorage.getItem("voice", queue.updated_at) !== queue.updated_at
            ) {
                responsiveVoice.speak(
                    "على صاحب التسلسل " +
                        queue.queue +
                        " مراجعة الحاسبة " +
                        queue.users_id,
                    "Arabic Female"
                );
            }
            localStorage.setItem("voice", queue.updated_at);
        }
    });

    return (
        <Visitor classes="print:w-20 print:h-20 w-40 h-40">
            <Head title="التسلسل التالي" />
            <div
                className=" flex items-center justify-evenly text-4xl flex-col space-y-4"
                style={{ height: "78vh" }}
            >
                {queue <= 0 ? (
                    <h1 className="text-5xl">لا يوجد مراجعين في الانتظار</h1>
                ) : (
                    <>
                        {" "}
                        <h3 className="text-6xl align-middle mt-5">
                            {" "}
                            تسلسل المراجع التالي هو :{" "}
                            <span className="text-red-500 font-bold bg-gray-200 border-2 rounded-lg px-2 text-7xl">
                                {" "}
                                {queue.queue}{" "}
                            </span>{" "}
                        </h3>
                        <div className="grid grid-cols-2">
                            <div className="m-4 rounded-lg shadow-lg bg-nav">
                                <div className="text-center m-2 p-3 rounded-lg text-black">
                                    <div className="text-white font-black text-7xl pb-3">
                                        {emp.name}
                                    </div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="200"
                                        height="200"
                                        fill="#fff"
                                        className="bi bi-person-square my-3 mx-auto opacity-40"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="m-4 rounded-lg shadow-lg bg-nav">
                                <div className="text-center m-2 p-3 rounded-lg text-black">
                                    <div className="text-white font-black text-7xl pb-3">
                                        {emp.id}
                                    </div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="200"
                                        height="200"
                                        fill="#fff"
                                        className="bi bi-pc-display-horizontal my-3 mx-auto opacity-40"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0h-13Zm0 1a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-13ZM12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM1.5 12a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25Z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>{" "}
                    </>
                )}
            </div>
        </Visitor>
    );
}
