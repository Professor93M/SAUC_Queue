import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";

export const Visitor = ({ children, classes }) => {
    return (
        <div className="h-28">
            <div className="flex h-full items-center py-2  text-gray-100 bg-nav justify-around m-auto">
                <div className="flex text-xl print:text-xs print:hidden flex-col items-center justify-center">
                    <h2>نظام الطابور الالكتروني</h2>
                    <h2>كلية شط العرب</h2>
                </div>
                <div className="flex print:block print:text-sm print:text-black print:text-center print:mt-16 text-right print:space-x-0 print:space-y-0 space-x-3 text-lg space-y-1 items-center justify-center">
                    <div
                        // dir="rtl"
                        className="flex justify-around flex-col"
                    >
                        <h2>وزارة التعليم العالي والبحث العلمي</h2>
                        <h2>كلية شط العرب الجامعة</h2>
                    </div>
                    <div>
                        <ApplicationLogo />
                    </div>
                </div>
            </div>
            <main dir="rtl"> {children} </main>
        </div>
    );
};
