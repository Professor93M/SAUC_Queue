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
        // const { name, value } = e.target;
        // setSearch({ ...search, [name]: value });
        // console.log(e.target.value);
        Inertia.get(`/dashboard`, { date: e.target.value }, {replaces: true, preserveState: true});

    };

    const handleClick = () => {
        Inertia.get(`/dashboard?filter=${search}`);
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
                                {/* <div className="flex  items-center">
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
                                </div> */}
                                <div className="flex items-center">
                                    <Input
                                        placeholder="ادخل تاريخ المعالجة"
                                        className="border-2  px-5 py-1"
                                        type="text"
                                        name="serveDate"
                                        handleFocus={handleOnFocus}
                                        handleBlur={handleOnBlur}
                                        value={serveDate}
                                        handleChange={handleChange}
                                    />
                                    <Link href="/dashboard" className="bg-gray-300 text-black rounded-lg p-2 mx-2 hover:bg-blue-300 transition duration-500 ease-in-out">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                                            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                                        </svg>
                                    </Link>
                                </div>
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
