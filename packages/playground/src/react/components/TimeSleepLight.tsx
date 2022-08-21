import React, { SVGProps } from "react";

export function TimeSleepLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle
                cx="12"
                cy="12"
                r="8"
                stroke="currentColor"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M5 2.8039A6 6 0 0 0 2.8039 5M19 2.8039A6.0009 6.0009 0 0 1 21.1962 5"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M9 9h5.6379c.1336 0 .2005.1616.106.256l-5.4878 5.488c-.0945.0945-.0276.2561.106.2561H15"
                strokeLinejoin="round"
                strokeWidth="2"
            />
        </svg>
    );
}
export default TimeSleepLight;
