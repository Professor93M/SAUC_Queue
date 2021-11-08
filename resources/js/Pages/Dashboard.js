import React, { useState } from "react";
import moment from "moment";
import "moment/locale/ar";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import Input from "@/Components/Input";
import { Inertia } from "@inertiajs/inertia";
import Pagination from "@/Components/Pagination";
import Button from "@/Components/Button";

export default function Dashboard({ users, auth, count }) {
    console.log(users);
    let initialState = {
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
        Inertia.get(
            `/dashboard`,
            { date: e.target.value },
            { replaces: true, preserveState: true }
        );
    };

    const handleClick = () => {
        Inertia.get("/reset");
    };

    setTimeout(() => {
        Inertia.reload();
    }, 10000);

    const { serveDate } = search;
    return (
        <Authenticated auth={auth}>
            <Head title="السجل" />

            <div className="py-12 ">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white space-y-6 border-b flex flex-col text-2xl justify-between text-gray-600 border-gray-200">
                            <div className="flex items-center w-full justify-between text-lg mb-4">
                                <div className="flex items-center h-10">
                                    <Input
                                        placeholder="ادخل تاريخ المعالجة"
                                        className="border-4 focus:outline-none focus:border-0 w-96 px-5 py-2"
                                        type="text"
                                        name="serveDate"
                                        handleFocus={handleOnFocus}
                                        handleBlur={handleOnBlur}
                                        value={serveDate}
                                        handleChange={handleChange}
                                    />
                                    <Link
                                        href="/dashboard"
                                        className="bg-green-500 text-black rounded-lg p-3 mx-2 hover:bg-green-300 transition duration-500 ease-in-out"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="#fff"
                                            className="bi bi-arrow-clockwise"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
                                            />
                                            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                                        </svg>
                                    </Link>
                                </div>
                                <div className="flex  items-center justify-around w-96">
                                    <div className="flex">
                                        <p className="">
                                            عدد المراجعات : &nbsp;
                                        </p>
                                        <span className="text-white font-black  bg-green-500 rounded-lg px-2 select-none cursor-default">
                                            {count}
                                        </span>
                                    </div>
                                    <Button
                                        className="bg-gray-400 hover:bg-red-500 py-2 px-2"
                                        handelClick={handleClick}
                                        type="button"
                                    >
                                        تهيئة السجل
                                    </Button>
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
                                    {users.data.map((user, key) => {
                                        return (
                                            <tr key={key}>
                                                <td className="py-4 ">
                                                    {user.users.id}
                                                </td>
                                                <td className="pb-4">
                                                    {auth.user.isAdmin === 1 ? (
                                                        <Link
                                                            className="hover:text-red-500 transition duration-500 ease-in-out"
                                                            href={`/dashboard/${user.users.id}`}
                                                        >
                                                            {user.users.name}
                                                        </Link>
                                                    ) : (
                                                        user.users.name
                                                    )}
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
                            <Pagination
                                nextPage={users.next_page_url}
                                prevPage={users.prev_page_url}
                                perPage={users.perPage}
                                to={users.to}
                                currentPage={users.current_page}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
