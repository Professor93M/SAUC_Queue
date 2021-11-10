import React, { useEffect } from "react";
import Button from "@/Components/Button";
import Checkbox from "@/Components/Checkbox";
import Guest from "@/Layouts/Guest";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
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
        location.href = "/";
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <Guest title="تسجيل دخول">
            <Head title="تسجيل دخول" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div className="mt-4 text-right">
                    <Label forInput="email" value="البريد الالكتروني" />

                    <Input
                        type="text"
                        name="email"
                        value={data.email}
                        className="mt-1 py-2 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="mt-4 text-right">
                    <Label forInput="password" value="كلمة المرور" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 py-2 block w-full"
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="block mt-4 text-right">
                    <label className="flex justify-end items-center">
                        <span className="mr-2 text-sm text-gray-600">
                            تذكرني
                        </span>
                        <Checkbox
                            name="remember"
                            value={data.remember}
                            handleChange={onHandleChange}
                        />
                    </label>
                </div>

                <div className="flex items-center justify-between mt-4">
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
                        تسجيل دخول
                    </Button>
                </div>
            </form>
        </Guest>
    );
}
