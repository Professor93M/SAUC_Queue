import React, { useState } from "react";
import { Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import Button from "@/Components/Button";
import Input from "@/Components/Input";
import Label from "@/Components/Label";

export default function Edit({ auth, user }) {
    let initialState = {
        empName: user.name,
        empEmail: user.email,
        isAdmin: user.isAdmin,
    };
    let [userState, setUserState] = useState(initialState);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserState({ ...userState, [name]: value });

        // Inertia.get(
        //     `/dashboard`,
        //     { date: e.target.value },
        //     { replaces: true, preserveState: true }
        // );
    };

    const handelClick = () => {
        Inertia.put(`/employee/${user.id}/edit`, userState);
    };

    const { empEmail, empName, isAdmin } = userState;
    console.log(user);

    return (
        <Authenticated auth={auth}>
            <Head title="تعديل معلومات الموظف" />
            <div className=" flex justify-center  text-gray-900 text-2xl">
                <div className="pt-20">
                    <div className="max-w-7xl mx-auto border-2 border-nav p-8 space-y-6">
                        <div className="">
                            <Label
                                className="text-xl pb-2"
                                forInput="empName"
                                value="اسم الموظف"
                            />
                            <Input
                                type="text"
                                className="p-2 text-center"
                                name="empName"
                                placeholder={user.name}
                                handleChange={handleChange}
                                value={empName}
                            />
                        </div>

                        <div className="">
                            <Label
                                className="text-xl pb-2"
                                forInput="empEmail"
                                value="البريد الالكتروني"
                            />
                            <Input
                                type="email"
                                name="empEmail"
                                placeholder={user.email}
                                handleChange={handleChange}
                                value={empEmail}
                                className="p-2 text-center"
                            />
                        </div>
                        <div className="flex items-center h-10 text-gray-900">
                            <Input
                                type="radio"
                                name="isAdmin"
                                value={isAdmin}
                                placeholder={user.isAdmin}
                                handleChange={handleChange}
                                className="w-6 h-6"
                                checked={isAdmin == 1}
                            />
                            <span className="mr-2">ترقية لمدير</span>
                        </div>
                        <Button
                            className="bg-green-500 py-2  w-full"
                            handelClick={handelClick}
                            type="button"
                        >
                            حفظ
                        </Button>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
