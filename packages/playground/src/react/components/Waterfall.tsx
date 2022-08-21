import React, { SVGProps } from "react";

export function Waterfall(props: SVGProps<SVGSVGElement>) {
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
                d="M21 21H3m1-5v-2m8-2V9m-4 7v-6m8 3v-2m4 4V5"
            />
        </svg>
    );
}
export default Waterfall;
