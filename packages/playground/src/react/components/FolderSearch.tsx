import React, { SVGProps } from "react";

export function FolderSearch(props: SVGProps<SVGSVGElement>) {
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
                d="M20 12c0-1.8856 0-2.8284-.5858-3.4142C18.8284 8 17.8856 8 16 8h-1.3431c-.8175 0-1.2263 0-1.5938-.1522-.3676-.1523-.6566-.4413-1.2347-1.0194l-.6568-.6568c-.5781-.578-.8671-.8671-1.2347-1.0194C9.5694 5 9.1607 5 8.3431 5H8c-1.8856 0-2.8284 0-3.4142.5858C4 6.1716 4 7.1144 4 9v6c0 1.8856 0 2.8284.5858 3.4142C5.1716 19 6.1144 19 8 19h3"
                strokeWidth="2"
            />
            <circle
                cx="16.5"
                cy="16.5"
                r="2.5"
                stroke="currentColor"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M19.5 19.5 21 21"
                strokeWidth="2"
            />
        </svg>
    );
}
export default FolderSearch;
