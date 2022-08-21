import React, { SVGProps } from "react";

export function Filter(props: SVGProps<SVGSVGElement>) {
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
                stroke="currentColor"
                d="M5 12V4m14 16v-2M5 20v-4m14-4V4m-7 3V4m0 16v-8"
            />
            <circle cx="5" cy="14" r="2" stroke="currentColor" />
            <circle cx="12" cy="9" r="2" stroke="currentColor" />
            <circle cx="19" cy="15" r="2" stroke="currentColor" />
        </svg>
    );
}
export default Filter;
