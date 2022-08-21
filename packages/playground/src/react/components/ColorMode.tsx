import React, { SVGProps } from "react";

export function ColorMode(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="12" r="9" stroke="currentColor" />
            <path
                fill="currentColor"
                d="M18.364 5.636a9.0003 9.0003 0 0 0-12.728 0 9 9 0 0 0 0 12.728L12 12l6.364-6.364Z"
            />
        </svg>
    );
}
export default ColorMode;
