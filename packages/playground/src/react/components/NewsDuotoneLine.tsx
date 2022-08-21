import React, { SVGProps } from "react";

export function NewsDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                d="M5 10c0-1.8692 0-2.8038.402-3.5A3 3 0 0 1 6.5 5.402C7.1962 5 8.1308 5 10 5h4c1.8692 0 2.8038 0 3.5.402.4561.2632.8348.642 1.0981 1.098C19 7.1962 19 8.1308 19 10H5Z"
                fillOpacity=".24"
            />
            <rect
                width="14"
                height="14"
                x="5"
                y="5"
                stroke="currentColor"
                rx="3"
                strokeWidth="1.2"
            />
            <path stroke="currentColor" d="M5 10h14" strokeWidth="1.2" />
        </svg>
    );
}
export default NewsDuotoneLine;
