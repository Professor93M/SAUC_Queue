import React, { useState } from "react";
import moment from "moment";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import Input from "@/Components/Input";
import Button from "@/Components/Button";
import { Inertia } from "@inertiajs/inertia";

export default function Dashboard({ users, auth, count }) {
    let initialState = {
        empName: "",
        serveDate: "",
    };
    let [search, setSearch] = useState(initialState);

    const handleOnFocus = (e) => {
        e.target.type = "date";
    };
    const handleOnBlur = (e) => {
        e.target.type = "text";
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearch({ ...search, [name]: value });
        console.log(e.target.value);
    };

    const handleClick = () => {
        Inertia.post(`/dashboard?filter=${search}`, {
            id: auth.user.id,
        });
    };

    const { empName, serveDate } = search;
    return (
        <Authenticated auth={auth}>
            <Head title="Dashboard" />

            <div className="py-12 ">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white space-y-6 border-b flex flex-col text-2xl justify-between text-gray-600 border-gray-200">
                            <div className="flex items-center w-full justify-between text-lg mb-4">
                                <div className="flex  items-center">
                                    <Input
                                        placeholder="ادخل اسم الموظف"
                                        className="border-2 px-2 py-1"
                                        type="text"
                                        // autoComplete="true"
                                        name="empName"
                                        value={empName}
                                        handleChange={handleChange}
                                    />

                                    <Button
                                        handelClick={handleClick}
                                        className="mx-2 text-center"
                                    >
                                        ابحث
                                    </Button>
                                </div>
                                <Input
                                    placeholder="ادخل تاريخ المعالجة"
                                    className="border-2 px-2 py-1"
                                    type="text"
                                    name="serveDate"
                                    handleFocus={handleOnFocus}
                                    handleBlur={handleOnBlur}
                                    value={serveDate}
                                    handleChange={handleChange}
                                />
                                <div className="flex items-center">
                                    <p>عدد المراجعات : &nbsp;</p><span className="text-white font-black bg-gray-700 rounded-lg px-2 select-none cursor-default"> {count} </span>
                                </div>
                            </div>
                            <table className="w-full">
                                <thead className="text-2xl border-b-2 text-gray-800">
                                    <tr>
                                        <th className="pb-4">رقم الجهاز</th>
                                        <th className="pb-4">اسم الموظف</th>
                                        <th className="pb-4">رقم المراجع</th>
                                        <th className="pb-4"> وقت الطلب </th>
                                        <th className="pb-4"> وقت المعالجة </th>
                                    </tr>
                                </thead>
                                <tbody className="text-center text-2xl font-medium text-gray-600">
                                    {users.map((user, key) => {
                                        return (
                                            <tr key={key}>
                                                <td className="py-4 ">
                                                    {user.users.id}
                                                </td>
                                                <td className="pb-4">
                                                    <Link className="hover:text-red-500 transition duration-500 ease-in-out" href={`/dashboard/${user.users.id}`}>{user.users.name}</Link>
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
