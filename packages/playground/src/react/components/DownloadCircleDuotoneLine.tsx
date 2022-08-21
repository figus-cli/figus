import React, { SVGProps } from "react";

export function DownloadCircleDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                d="M5.2385 14.8117a7 7 0 0 0 13.523 0"
                strokeWidth="1.2"
            />
            <path
                fill="currentColor"
                d="m12 4-.3748-.4685L12 3.2316l.3748.2999L12 4Zm.6 9a.6.6 0 1 1-1.2 0h1.2ZM6.6252 7.5315l5-4 .7496.937-5 4-.7496-.937Zm5.7496-4 5 4-.7496.937-5-4 .7496-.937ZM12.6 4v9h-1.2V4h1.2Z"
            />
            <circle
                r="5"
                fill="currentColor"
                fillOpacity=".24"
                transform="matrix(0 -1 -1 0 12 15)"
            />
            <circle
                r="5.3"
                stroke="currentColor"
                strokeOpacity=".24"
                strokeWidth=".6"
                transform="matrix(0 -1 -1 0 12 15)"
            />
        </svg>
    );
}
export default DownloadCircleDuotoneLine;
