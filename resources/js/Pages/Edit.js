import React, { useState } from "react";
import { Head, useForm } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import Button from "@/Components/Button";
import Input from "@/Components/Input";
import Label from "@/Components/Label";

export default function Edit({ auth, user }) {
    let { data, setData, post } = useForm({
        name: user.name || "",
        email: user.email || "",
        isAdmin: user.isAdmin || "",
        password: "",
        password_confirmation: "",
        _method: "PUT",
    });
    // let [userState, setUserState] = useState(initialState);
    // let { email, name, isAdmin, password, password_confirmation } = userState;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handelClick = (e) => {
        e.preventDefault();
        Inertia.post(`/employee/${user.id}`, data);
    };

    const handlechecked = () => {
        isAdmin = !isAdmin;
        setData({ ...data, isAdmin });
    };
    return (
        <Authenticated auth={auth}>
            <Head title="تعديل معلومات الموظف" />
            <div className=" flex justify-center  text-gray-900 text-2xl">
                <div className="pt-12" style={{ width: "512px" }}>
                    <form
                        onSubmit={handelClick}
                        className="w-full mx-auto border-2 border-nav p-8 space-y-6"
                    >
                        <div className="">
                            <Label
                                className="text-xl w-full pb-2"
                                forInput="name"
                                value="اسم الموظف"
                            />
                            <Input
                                type="text"
                                className="p-2 w-full text-center"
                                name="name"
                                handleChange={handleChange}
                                value={data.name}
                            />
                        </div>

                        <div className="">
                            <Label
                                className="text-xl  pb-2"
                                forInput="email"
                                value="البريد الالكتروني"
                            />
                            <Input
                                type="email"
                                name="email"
                                handleChange={handleChange}
                                value={data.email}
                                className="p-2 w-full text-center"
                            />
                        </div>

                        <div className="">
                            <Label
                                className="text-xl pb-2"
                                forInput="password"
                                value="كلمة المرور"
                            />
                            <Input
                                type="password"
                                name="password"
                                handleChange={handleChange}
                                value={data.password}
                                className="p-2 text-center w-full placeholder-gray-600"
                                placeholder="اترك الحقل فارغ لعدم التغيير"
                            />
                        </div>
                        <div className="">
                            <Label
                                className="text-xl pb-2"
                                forInput="email"
                                value="تأكيد كلمة المرور"
                            />
                            <Input
                                name="password_confirmation"
                                type="password"
                                handleChange={handleChange}
                                value={data.password_confirmation}
                                className="p-2 text-center w-full placeholder-gray-600"
                                placeholder="اترك الحقل فارغ لعدم التغيير"
                            />
                        </div>
                        {/* <div className="flex items-center h-10 w-1/2 text-gray-900">
                            <Input
                                type="checkBox"
                                name="isAdmin"
                                value={data.isAdmin}
                                handleChange={handlechecked}
                                className="w-6 h-6"
                                checked={data.isAdmin}
                            />
                            <Label
                                forInput="isAdmin"
                                className="text-xl px-4 "
                                value="ترقية الى مدير"
                            />
                        </div> */}

                        <Button
                            className="bg-green-500 py-2 w-full"
                            disabledClass="bg-gray-400 p-4 text-background"
                        >
                            حفظ
                        </Button>
                    </form>
                </div>
            </div>
        </Authenticated>
    );
}
