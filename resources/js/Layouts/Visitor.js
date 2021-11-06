import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";

export const Visitor = ({ children, classes }) => {
    return (
        <>
            <div className="flex text-3xl items-center py-2 text-gray-100 bg-gray-600 justify-around  m-auto">
                <h2 className="text-right">
                    نظام الطابور الالكتروني <br /> لكلية شط العرب
                </h2>
                <div className="flex print:text-sm print:items-end text-3xl space-y-1 items-center justify-center">
                    <div
                        dir="rtl"
                        className="flex justify-around flex-col h-28"
                    >
                        <h2>وزارة التعليم العالي والبحث العلمي</h2>
                        <h2>كلية شط العرب الجامعة</h2>
                    </div>
                    <ApplicationLogo classes={classes} />
                </div>
            </div>
            <main dir="rtl" className="bg-indigo-300">
                {" "}
                {children}{" "}
            </main>
        </>
    );
};
