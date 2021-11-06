import React from "react";
import { Link } from "@inertiajs/inertia-react";

const Pagination = ({ nextPage, prevPage }) => {
    return (
        <div dir="ltr" className="flex max-w-lg justify-around">
            <Link
                className="p-2 bg-green-500 text-background rounded-md"
                href={prevPage === null ? "#" : prevPage}
            >
                السابق{" "}
            </Link>
            <Link
                className="p-2 bg-green-500 text-background rounded-md"
                href={nextPage === null ? "#" : nextPage}
            >
                التالي
            </Link>
        </div>
    );
};

export default Pagination;
