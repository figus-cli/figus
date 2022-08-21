import React, { SVGProps } from "react";

export function DownloadCircleDuotone(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <ellipse
                fill="currentColor"
                rx="6"
                ry="6"
                transform="matrix(0 -1 -1 0 12 14)"
            />
            <path
                fill="currentColor"
                d="M9.8536 7.8536a.5.5 0 1 1-.7072-.7072l.7072.7072ZM12 5l-.3536-.3536L12 4.293l.3536.3535L12 5Zm2.8536 2.1464a.5001.5001 0 0 1-.7072.7072l.7072-.7072ZM12.5 15a.5.5 0 0 1-1 0h1ZM9.1464 7.1464l2.5-2.5.7072.7072-2.5 2.5-.7072-.7072Zm3.2072-2.5 2.5 2.5-.7072.7072-2.5-2.5.7072-.7072ZM12.5 5v10h-1V5h1Z"
            />
        </svg>
    );
}
export default DownloadCircleDuotone;
