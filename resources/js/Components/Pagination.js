import React from "react";
import { Link } from "@inertiajs/inertia-react";

const Pagination = ({ links }) => {
    return (
        <div dir="ltr" className="flex max-w-lg justify-around">
            {links.map((link, key) => (
                <Link
                    key={key}
                    className="p-2 bg-nav text-background rounded-md"
                    href={link.url === null ? "#" : link.url}
                >
                    {link.label}
                </Link>
            ))}
        </div>
    );
};

export default Pagination;
