import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";

export const Visitor = ({ children, classes }) => {
    return (
        <>
            <div className="flex items-center py-2 bg-gray-200 justify-around  m-auto">
                <ApplicationLogo classes={classes} />
                <div className="flex flex-col print:text-sm print:items-end text-3xl space-y-1 items-center justify-center">
                    <h2>جمهورية العراق</h2>
                    <h2>وزارة التعليم العالي والبحث العلمي</h2>
                    <h2>كلية شط العرب الجامعة</h2>
                </div>
            </div>
            <main dir="rtl" className="bg-indigo-300">
                {" "}
                {children}{" "}
            </main>
        </>
    );
};
