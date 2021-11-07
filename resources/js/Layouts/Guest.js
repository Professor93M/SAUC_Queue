import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/inertia-react";

export default function Guest({ children, classes }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center py-2 sm:pt-0 text-gray-100 ">
            <div>
                <img
                    src="/logo.png"
                    className="object-fill w-40 h-40 print:w-9 print:h-9"
                    alt="logo"
                />
            </div>

            <h2 className="text-black font-bold text-center text-3xl mt-3">
                اضافة موظف جديد
            </h2>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 text-gray-700 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
