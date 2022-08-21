import React, { SVGProps } from "react";

export function EditFill(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                fill="currentColor"
                d="m9.5 8 7-2.5-3 5-1 5-1.5 2-5.5-1 .5-2L9.5 8Z"
            />
            <path
                stroke="currentColor"
                d="m6 21-.189-3.0253C5.3714 10.9438 10.9553 5 18 5l-1.2173.9739A10.0789 10.0789 0 0 0 13 13.8442c0 2.1389-1.9722 3.7332-4.0636 3.285L6 16.5"
                strokeWidth="2"
            />
        </svg>
    );
}
export default EditFill;
