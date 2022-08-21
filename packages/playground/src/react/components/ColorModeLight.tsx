import React, { SVGProps } from "react";

export function ColorModeLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="12" r="8.5" stroke="currentColor" />
            <path
                fill="currentColor"
                d="M16.2426 7.7574a5.9999 5.9999 0 1 0-8.4852 8.4852L12 12l4.2426-4.2426Z"
            />
        </svg>
    );
}
export default ColorModeLight;
