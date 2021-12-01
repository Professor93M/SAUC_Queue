import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import Button from "@/Components/Button";

export default function Show({ auth, users }) {
    return (
        <Authenticated auth={auth}>
            <Head title="معلومات الموظفين" />
            <div className=" pt-8">
                <h2 className="text-black font-bold text-center text-4xl">
                    اسماء الموظفين
                </h2>
                <div className="pt-16">
                    <div className="max-w-5xl mx-auto py-1">
                        <div className="float-left flex mb-4">
                            <Link
                                className="rounded-md text-base bg-green-500 py-1 px-3 hover:bg-green-300 hover:text-black transition duration-500 ease-in-out"
                                href="/register"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="30"
                                    fill="currentColor"
                                    className="bi bi-plus inline"
                                    viewBox="0 0 15 15"
                                >
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                                <span>إضافة موظف</span>
                            </Link>
                        </div>
                        <table className="w-full pt-4">
                            <thead className="text-2xl border-b-2 text-gray-800">
                                <tr>
                                    <th className="pb-4">رقم الحاسبة</th>
                                    <th className="pb-4">اسم الموظف</th>
                                    <th className="pb-4">البريد الالكتروني</th>
                                    <th className="pb-4">مميزات</th>
                                    <th className="pb-4">الخيارات</th>
                                </tr>
                            </thead>
                            <tbody className="text-center text-2xl font-medium text-gray-600">
                                {users.map((user, key) => {
                                    return (
                                        <tr key={key}>
                                            <td className="py-4 ">{user.PcN}</td>
                                            <td className="pb-4">
                                                {auth.user.isAdmin === 1 ? (
                                                    <Link
                                                        className="hover:text-red-500 transition duration-500 ease-in-out"
                                                        href={`/employee/${user.id}/edit`}
                                                    >
                                                        {user.name}
                                                    </Link>
                                                ) : (
                                                    user.name
                                                )}
                                            </td>
                                            <td className="py-4 ">
                                                {user.email}
                                            </td>
                                            {user.isAdmin
                                                ? <td className="py-4 text-green-600 px-5">
                                                    مدير
                                                </td>
                                                : <td className="py-4 text-red-600 px-5">
                                                    موظف
                                                </td>
                                            }
                                            <td className="py-4 flex items-center justify-around">
                                                <Link
                                                    href={`/employee/${user.id}/edit`}
                                                    className="bg-green-500 text-black p-2 rounded-lg mx-2 hover:bg-green-300 transition duration-500 ease-in-out"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="20"
                                                        height="20"
                                                        fill="#fff"
                                                        className="bi bi-pencil-square"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                                        />
                                                    </svg>
                                                </Link>
                                                <Link
                                                    href={`/dashboard/${user.id}`}
                                                    className="px-2 py-2 bg-blue-500 rounded-lg mx-2 hover:bg-blue-300 transition duration-500 ease-in-out"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="20"
                                                        height="20"
                                                        fill="#fff"
                                                        className="bi bi-journal-check"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                                                        />
                                                        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                                                        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                                                    </svg>
                                                </Link>

                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
