import React, { SVGProps } from "react";

export function BookCheckDuotone(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <rect
                width="16"
                height="18"
                x="4"
                y="3"
                fill="currentColor"
                fillOpacity=".24"
                rx="2"
            />
            <path
                fill="currentColor"
                d="M4 19c0-1.1046.8954-2 2-2h11c.9319 0 1.3978 0 1.7654-.1522.49-.203.8794-.5924 1.0824-1.0824C20 15.3978 20 14.9319 20 14v3c0 1.8856 0 2.8284-.5858 3.4142C18.8284 21 17.8856 21 16 21H6c-1.1046 0-2-.8954-2-2Z"
            />
            <path
                stroke="currentColor"
                d="m9.5 10.5 1.8939 1.8939a.15.15 0 0 0 .2122 0L15.5 8.5"
                strokeWidth="1.2"
            />
        </svg>
    );
}
export default BookCheckDuotone;
