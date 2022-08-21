import React, { SVGProps } from "react";

export function LoadCircleDuotone(props: SVGProps<SVGSVGElement>) {
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
                fillOpacity=".24"
                rx="6"
                ry="6"
                transform="matrix(0 -1 -1 0 12 14)"
            />
            <path
                fill="currentColor"
                d="M9.8536 12.1464a.5001.5001 0 0 0-.7072.7072l.7072-.7072ZM12 15l-.3536.3536.3536.3535.3536-.3535L12 15Zm2.8536-2.1464a.5002.5002 0 0 0 0-.7072.5002.5002 0 0 0-.7072 0l.7072.7072ZM12.5 5a.5.5 0 0 0-1 0h1Zm-3.3536 7.8536 2.5 2.5.7072-.7072-2.5-2.5-.7072.7072Zm3.2072 2.5 2.5-2.5-.7072-.7072-2.5 2.5.7072.7072ZM12.5 15V5h-1v10h1Z"
            />
        </svg>
    );
}
export default LoadCircleDuotone;
