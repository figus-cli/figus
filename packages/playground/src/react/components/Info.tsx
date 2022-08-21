import React, { SVGProps } from "react";

export function Info(props: SVGProps<SVGSVGElement>) {
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
                d="M13.7365 21.8481a10.0017 10.0017 0 0 0 6.455-4.1123 10.0007 10.0007 0 0 0 1.6566-7.4723 10.0011 10.0011 0 0 0-4.1123-6.455A10.0006 10.0006 0 0 0 6.627 3.566a10 10 0 0 0 7.1095 18.282Z"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M12 12v6m0-11V6"
                strokeWidth="2"
            />
        </svg>
    );
}
export default Info;
