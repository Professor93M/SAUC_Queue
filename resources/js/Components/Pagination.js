import React from "react";
import { Link } from "@inertiajs/inertia-react";

const Pagination = ({ nextPage, prevPage, prePage, to, currentPage }) => {
    return (
        <div dir="ltr" className="flex max-w-lg justify-center space-x-3">
            {nextPage && (
                <Link
                    className="py-2 px-3 bg-green-500 text-background rounded-md"
                    href={nextPage === null ? "#" : nextPage}
                >
                    التالي
                </Link>
            )}

            {prevPage && (
                <Link
                    className="py-2 px-3 bg-green-500 text-background rounded-md"
                    href={prevPage === null ? "#" : prevPage}
                >
                    السابق
                </Link>
            )}
        </div>
    );
};

export default Pagination;
