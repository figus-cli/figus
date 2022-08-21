import React, { SVGProps } from "react";

export function CompassNorthFill(props: SVGProps<SVGSVGElement>) {
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
                d="M9 9V3.1207a.05.05 0 0 1 .0854-.0353l5.8292 5.8293A.05.05 0 0 0 15 8.8793V3M7.0588 20.8824l4.8965-9.793a.05.05 0 0 1 .0894 0l4.8965 9.793a.05.05 0 0 1-.0633.0688l-4.8593-1.9438a.0508.0508 0 0 0-.0372 0l-4.8593 1.9438a.05.05 0 0 1-.0633-.0688Z"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M12 12v7"
                strokeWidth="2"
            />
        </svg>
    );
}
export default CompassNorthFill;
