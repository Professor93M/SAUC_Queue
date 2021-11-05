import React from "react";
import moment from "moment";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";

export default function Dashboard({ users, auth }) {
    console.log(users);

    return (
        <Authenticated auth={auth}>
            <Head title="Dashboard" />

            <div className="py-12 ">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white space-y-6 border-b flex flex-col text-3xl justify-between text-gray-600 border-gray-200">
                            <div className="flex ">
                                <label htmlFor="dateInput">
                                    {" "}
                                    بحث حسب التاريخ :{" "}
                                </label>
                                <input type="date" name="dateInput" />
                            </div>
                            <table className="w-full">
                                <thead className="text-4xl border-b-2 text-gray-800">
                                    <tr>
                                        <th className="pb-4">رقم الجهاز</th>
                                        <th className="pb-4">اسم الموظف</th>
                                        <th className="pb-4">رقم المراجع</th>
                                        <th className="pb-4"> وقت الطلب </th>
                                        <th className="pb-4"> وقت المعالجة </th>
                                    </tr>
                                </thead>
                                <tbody className="text-center text-3xl font-medium text-gray-600">
                                    {users.map((user, key) => {
                                        return (
                                            <tr key={key}>
                                                <td className="py-4 ">
                                                    {user.users.id}
                                                </td>
                                                <td className="pb-4">
                                                    {user.users.name}
                                                </td>
                                                <td className="pb-4">
                                                    {user.queue}
                                                </td>
                                                <td dir="ltr" className="pb-4">
                                                    {moment(
                                                        user.created_at
                                                    ).fromNow()}
                                                </td>
                                                <td dir="ltr" className="pb-4">
                                                    {moment(
                                                        user.updated_at
                                                    ).fromNow()}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
