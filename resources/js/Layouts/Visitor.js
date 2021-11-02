import React from "react";

export const Visitor = ({ children }) => {
    return (
        <>
            <div className="flex items-center py-2 bg-gray-200 justify-around  m-auto">
                <div className="Logo print:w-20 print:h-20 w-40 h-40">
                    <img src="./logo.png" alt="logo" />
                </div>
                <div className="flex flex-col print:text-sm print:items-end text-xl space-y-1 items-center justify-center">
                    <h2>جمهورية العراق</h2>
                    <h2>وزارة التعليم العالي والبحث العلمي</h2>
                    <h2>كلية شط العرب الجامعة</h2>
                </div>
            </div>
            <main> {children} </main>
        </>
    );
};
