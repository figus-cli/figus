import React, { SVGProps } from "react";

export function FolderAltFill(props: SVGProps<SVGSVGElement>) {
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
                d="M3 7c0-1.8856 0-2.8284.5858-3.4142C4.1716 3 5.1144 3 7 3h10c1.8856 0 2.8284 0 3.4142.5858C21 4.1716 21 5.1144 21 7v10c0 1.8856 0 2.8284-.5858 3.4142C19.8284 21 18.8856 21 17 21H7c-1.8856 0-2.8284 0-3.4142-.5858C3 19.8284 3 18.8856 3 17V7Z"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                d="M18 10h-5.3431c-.8175 0-1.2263 0-1.5938-.1522-.3676-.1523-.6566-.4413-1.2347-1.0194l-.6568-.6568c-.578-.578-.8671-.8671-1.2347-1.0194C7.5694 7 7.1607 7 6.3431 7H3v10c0 1.8856 0 2.8284.5858 3.4142C4.1716 21 5.1144 21 7 21h10c1.8856 0 2.8284 0 3.4142-.5858C21 19.8284 21 18.8856 21 17V7c0 .9319 0 1.3978-.1522 1.7654-.203.49-.5924.8794-1.0824 1.0824C19.3978 10 18.9319 10 18 10ZM7 15c-.5523 0-1 .4477-1 1s.4477 1 1 1h8c.5523 0 1-.4477 1-1s-.4477-1-1-1H7Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default FolderAltFill;
