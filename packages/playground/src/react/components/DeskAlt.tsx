import React, { SVGProps } from "react";

export function DeskAlt(props: SVGProps<SVGSVGElement>) {
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
                d="M15.5 5c1.4045 0 2.1067 0 2.6111.337.2184.146.4059.3335.5518.5519C19 6.3933 19 7.0955 19 8.5V18c0 1.8856 0 2.8284-.5858 3.4142C17.8284 22 16.8856 22 15 22H9c-1.8856 0-2.8284 0-3.4142-.5858C5 20.8284 5 19.8856 5 18V8.5c0-1.4045 0-2.1067.337-2.6111a2.0001 2.0001 0 0 1 .5519-.5518C6.3933 5 7.0955 5 8.5 5"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M9 5c0-1.1046.8954-2 2-2h2c1.1046 0 2 .8954 2 2s-.8954 2-2 2h-2c-1.1046 0-2-.8954-2-2Z"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M9 12h6m-6 4h4"
                strokeWidth="2"
            />
        </svg>
    );
}
export default DeskAlt;
