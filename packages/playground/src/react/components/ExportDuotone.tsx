import React, { SVGProps } from "react";

export function ExportDuotone(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <rect
                width="14"
                height="6"
                x="5"
                y="13"
                fill="currentColor"
                fillOpacity=".24"
                rx="2"
            />
            <path
                fill="currentColor"
                d="M9.8536 8.8536a.5.5 0 1 1-.7072-.7072l.7072.7072ZM12 6l-.3536-.3536L12 5.293l.3536.3535L12 6Zm2.8536 2.1464a.5001.5001 0 0 1-.7072.7072l.7072-.7072ZM12.5 16a.5.5 0 0 1-1 0h1ZM9.1464 8.1464l2.5-2.5.7072.7072-2.5 2.5-.7072-.7072Zm3.2072-2.5 2.5 2.5-.7072.7072-2.5-2.5.7072-.7072ZM12.5 6v10h-1V6h1Z"
            />
        </svg>
    );
}
export default ExportDuotone;
