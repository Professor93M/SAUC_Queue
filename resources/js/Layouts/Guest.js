import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/inertia-react";

export default function Guest({ children, classes }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center py-2 sm:pt-0 text-gray-100 ">
            <div>
                <Link href="/">
                    <ApplicationLogo />
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 text-gray-700 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
