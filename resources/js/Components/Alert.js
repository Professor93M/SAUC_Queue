import React from "react";

export default function Alert() {
    return (
        <div className="absolute top-0 right-0   left-0 bottom-0 z-50  w-full ">
            <h1 className="bg-red-500 text-base p-4 opacity-100 mx-auto max-w-xs transform translate-y-64  rounded-md text-center text-background">
                الرجاء الانتظار
            </h1>
        </div>
    );
}
