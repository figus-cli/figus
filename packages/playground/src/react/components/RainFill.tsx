import React, { SVGProps } from "react";

export function RainFill(props: SVGProps<SVGSVGElement>) {
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
                d="M6 14h12c1.6569 0 3-1.3431 3-3s-1.3431-3-3-3c-.64 0-1.174-.4613-1.4361-1.0452C15.7822 5.2131 14.0328 4 12 4 9.9672 4 8.2178 5.213 7.436 6.9548 7.174 7.5388 6.64 8 6 8c-1.6569 0-3 1.3431-3 3s1.3431 3 3 3Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
            <path
                stroke="currentColor"
                d="M12 19v-2m5 3v-3M7 21v-4"
                strokeWidth="2"
            />
        </svg>
    );
}
export default RainFill;
