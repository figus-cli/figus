import React, { SVGProps } from "react";

export function LoadCircleDuotoneLine(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle
                r="5"
                fill="currentColor"
                transform="matrix(0 -1 -1 0 12 15)"
            />
            <circle
                r="5.3"
                stroke="currentColor"
                transform="matrix(0 -1 -1 0 12 15)"
            />
            <path
                stroke="currentColor"
                d="M5.2385 14.8117a7 7 0 0 0 13.523 0"
            />
            <path
                fill="currentColor"
                d="m12 13-.3748.4685.3748.2999.3748-.2999L12 13Zm.6-9a.6.6 0 1 0-1.2 0h1.2ZM6.6252 9.4685l5 4 .7496-.937-5-4-.7496.937Zm5.7496 4 5-4-.7496-.937-5 4 .7496.937ZM12.6 13V4h-1.2v9h1.2Z"
            />
        </svg>
    );
}
export default LoadCircleDuotoneLine;
