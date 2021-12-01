import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import Button from "@/Components/Button";
import Alert from "@/Components/Alert";
import moment from "moment";
import "moment/locale/ar";

export default function Employee({
    auth,
    queueCount,
    queue,
    alert,
    last_user,
}) {
    let [disabled, setDisabled] = useState(true);
    const counter = queueCount;

    const handelClick = (e) => {
        setDisabled(true);
        setTimeout(() => {
            setDisabled(false);
        }, 10000);
        Inertia.post("/employee", { id: auth.user.id });
    };

    useEffect(() => {
        setTimeout(() => {
            setDisabled(false);
        }, 4000);
    }, [counter]);

    useEffect(() => {
        setInterval(() => {
            Inertia.reload();
        }, 7000);
    }, []);

    return (
        <Authenticated auth={auth}>
            <Head title={auth.user.name} />
            <div
                style={{ height: "60vh" }}
                className=" flex items-center pt-6 justify-evenly text-6xl flex-col text-gray-700 space-y-4  "
            >
                {alert ? <Alert /> : ""}
                <h1> عدد المراجعين في الانتظار : {queueCount} </h1>
                {queueCount > 0 ? (
                    <Button
                        handelClick={handelClick}
                        type="button"
                        processing={disabled}
                        disabledClass="bg-gray-400 p-4 text-4xl text-background"
                        className=" py-4 px-6 bg-green-500  text-background text-4xl"
                    >
                        {disabled ? "انتظر قليلاً" : "التالي "}
                    </Button>
                ) : (
                    ""
                )}
            </div>
            {last_user ? (
                <>
                    <h1 className="text-gray-700 text-center text-3xl mb-4">
                        اخر معالجة
                    </h1>
                    <table className="w-1/2 mx-auto mb-3 bg-green-100 rounded-lg">
                        <thead className="text-2xl bg-blue-200 rounded-lg text-gray-800">
                            <tr>
                                <th className="py-3">رقم الحاسبة</th>
                                <th className="py-3">اسم الموظف</th>
                                <th className="py-3">تسلسل المراجع</th>
                                <th className="py-3">وقت المعالجة</th>
                            </tr>
                        </thead>
                        <tbody className="text-center text-2xl font-medium text-gray-600">
                            <tr>
                                <td className="py-4">{last_user.users.PcN}</td>
                                <td className="py-4">{last_user.users.name}</td>
                                <td className="py-4">{last_user.queue}</td>
                                <td className="py-4">
                                    {moment(last_user.updated_at).fromNow()}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </>
            ) : (
                ""
            )}
            {queue.length > 0 ? (
                <>
                    <h1 className="text-gray-700 text-center text-3xl my-4">
                        المراجعين في الانتظار
                    </h1>
                    <table className="w-1/2 mx-auto mb-3 bg-red-100 rounded-lg">
                        <thead className="text-2xl bg-red-200 rounded-lg text-gray-800">
                            <tr>
                                <th className="py-3">#</th>
                                <th className="py-3">تسلسل الانتظار</th>
                                <th className="py-3">وقت الطلب</th>
                            </tr>
                        </thead>
                        <tbody className="text-center text-2xl font-medium text-gray-600">
                            {queue.map((queue, key) => {
                                return (
                                    <tr key={key}>
                                        <td className="py-4">{key + 1}</td>
                                        <td className="py-4">{queue.queue}</td>
                                        <td className="py-4">
                                            {moment(queue.created_at).fromNow()}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </>
            ) : (
                ""
            )}
        </Authenticated>
    );
}
