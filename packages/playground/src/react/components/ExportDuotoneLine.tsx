import React, { SVGProps } from "react";

export function ExportDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                d="m12 5-.4243-.4243L12 4.1515l.4243.4242L12 5Zm.6 9a.6.6 0 1 1-1.2 0h1.2ZM6.5757 9.5757l5-5 .8486.8486-5 5-.8486-.8486Zm5.8486-5 5 5-.8486.8486-5-5 .8486-.8486ZM12.6 5v9h-1.2V5h1.2Z"
            />
            <path
                stroke="currentColor"
                d="M5 16v1c0 1.1046.8954 2 2 2h10c1.1046 0 2-.8954 2-2v-1"
                strokeWidth="1.2"
            />
            <rect
                width="14"
                height="4"
                x="5"
                y="15"
                fill="currentColor"
                fillOpacity=".24"
                rx="2"
            />
        </svg>
    );
}
export default ExportDuotoneLine;
