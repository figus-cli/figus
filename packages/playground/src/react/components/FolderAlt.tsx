import React, { SVGProps } from "react";

export function FolderAlt(props: SVGProps<SVGSVGElement>) {
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
                d="M3 7c0-1.8856 0-2.8284.5858-3.4142C4.1716 3 5.1144 3 7 3h10c1.8856 0 2.8284 0 3.4142.5858C21 4.1716 21 5.1144 21 7v10c0 1.8856 0 2.8284-.5858 3.4142C19.8284 21 18.8856 21 17 21H7c-1.8856 0-2.8284 0-3.4142-.5858C3 19.8284 3 18.8856 3 17V7Z"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M3 7h3c.9814 0 1.4721 0 1.8944.2111.4223.2112.7168.6038 1.3056 1.3889l.6.8c.5889.7851.8833 1.1777 1.3056 1.3889C11.5279 11 12.0186 11 13 11h5c.9319 0 1.3978 0 1.7654-.1522.49-.203.8794-.5924 1.0824-1.0824C21 9.3978 21 8.9319 21 8"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M7 16h8"
                strokeWidth="2"
            />
        </svg>
    );
}
export default FolderAlt;
