import React, { SVGProps } from "react";

export function SpeedDuotoneLine(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                stroke="currentColor"
                d="M9.5 15a2.4999 2.4999 0 0 1 3.4567-2.3097 2.501 2.501 0 0 1 1.353 1.353c.1256.3033.1903.6284.1903.9567"
                strokeLinejoin="round"
            />
            <path
                stroke="currentColor"
                d="m13.5 12.5 2-3"
                strokeLinejoin="round"
            />
            <path
                fill="currentColor"
                d="M8.9385 6.609A8 8 0 0 1 20 14v.5a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5V14a8.0002 8.0002 0 0 1 4.9385-7.391ZM3 14a9.0005 9.0005 0 0 1 2.636-6.364A9.0001 9.0001 0 0 1 21 14v.5c0 .8284-.6716 1.5-1.5 1.5h-15c-.8284 0-1.5-.6716-1.5-1.5V14Z"
                clipRule="evenodd"
                fillOpacity=".24"
                fillRule="evenodd"
            />
            <path
                stroke="currentColor"
                d="M16.5 15.5h-9"
                strokeLinejoin="round"
            />
        </svg>
    );
}
export default SpeedDuotoneLine;
