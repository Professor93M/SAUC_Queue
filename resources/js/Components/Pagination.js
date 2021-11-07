import React from "react";
import { Link } from "@inertiajs/inertia-react";

const Pagination = ({ nextPage, prevPage }) => {
    return (
        <div dir="ltr" className="flex max-w-lg justify-center space-x-3">
            <Link
                className="py-2 px-3 bg-green-500 text-background rounded-md"
                href={nextPage === null ? "#" : nextPage}
            >
                التالي
            </Link>{" "}
            <Link
                className="py-2 px-3 bg-green-500 text-background rounded-md"
                href={prevPage === null ? "#" : prevPage}
            >
                السابق
            </Link>
        </div>
    );
};

export default Pagination;
