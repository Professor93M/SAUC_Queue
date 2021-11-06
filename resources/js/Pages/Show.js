import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";

export default function Show({ auth, users }) {
    console.log(users);
    return (
        <Authenticated auth={auth}>
            <Head title="معلومات الموظفين" />
            <div className=" pt-8">
                <h2 className="text-black font-bold text-center text-4xl">
                    اسماء الموظفين
                </h2>
                <div className="pt-16">
                    <div className="max-w-2xl mx-auto border-2 border-green-500 p-8">
                        <table className="w-full">
                            <thead className="text-2xl border-b-2 text-gray-800">
                                <tr>
                                    <th className="pb-4">اسم الموظف</th>
                                    <th className="pb-4">البريد الالكتروني</th>
                                    {/* <th className="pb-4">الخيارات</th> */}
                                </tr>
                            </thead>
                            <tbody className="text-center text-2xl font-medium text-gray-600">
                                {users.map((user, key) => {
                                    return (
                                        <tr key={key}>
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
                                            {/* <td className="py-4 flex items-center justify-around">
                                            <Button className="px-2 py-2 bg-red-500">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    fill="#fff"
                                                    class="bi bi-trash"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                                    />
                                                </svg>
                                            </Button>
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
                                        </td> */}
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
