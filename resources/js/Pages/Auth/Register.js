import React, { useEffect } from "react";
import Button from "@/Components/Button";
import Guest from "@/Layouts/Guest";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import ComboBox from "@/Components/ComboBox";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        PcN: 0,
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const goBack = () => {
        history.back();
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <Guest title="اضافة  موظف جديد">
            <Head title="اضافة  موظف جديد" />

            <ValidationErrors errors={errors} />

            <form onSubmit={submit} dir="rtl">
                <div className="mt-4 text-right">
                    <Label forInput="name" value="اسم الموظف" />

                    <Input
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 py-2 block w-full px-2 text-right"
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4 text-right">
                    <Label forInput="email" value="البريد الالكتروني" />

                    <Input
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 py-2 block w-full px-2"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4 text-right">
                    <Label forInput="password" value="كلمة المرور" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 py-2 block w-full px-2"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4 text-right">
                    <Label
                        forInput="password_confirmation"
                        value="تأكيد كلمة المرور"
                    />

                    <Input
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 py-2 block w-full px-2"
                        handleChange={onHandleChange}
                        required
                    />
                </div>
                <div className="mt-4 flex w-full  items-center py-2 text-right">
                    <Label forInput="PcN" value="رقم الحاسبة" />

                    <ComboBox
                        name="PcN"
                        value={data.PcN}
                        className=" block mr-8"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div
                    dir="ltr"
                    className="flex items-center justify-between mt-5"
                >
                    <Button
                        className="ml-4 py-1 px-6 bg-blue-500"
                        handelClick={goBack}
                        type="button"
                    >
                        رجوع
                    </Button>
                    <Button
                        className="ml-4 py-1 px-6 bg-green-500"
                        disabledClass="bg-gray-400 ml-4 py-1 px-6 text-background"
                        processing={processing}
                    >
                        تسجيل
                    </Button>
                </div>
            </form>
        </Guest>
    );
}
