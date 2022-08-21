import React, { SVGProps } from "react";

export function FolderCreate(props: SVGProps<SVGSVGElement>) {
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
                d="M9 13h3m0 0h3m-3 0v3m0-3v-3m6-4c.9319 0 1.3978 0 1.7654.1522.49.203.8794.5924 1.0824 1.0824C21 7.6022 21 8.0681 21 9m-3 11c.9319 0 1.3978 0 1.7654-.1522.49-.203.8794-.5924 1.0824-1.0824C21 18.3978 21 17.9319 21 17M6 20c-.9319 0-1.3978 0-1.7654-.1522a2.0003 2.0003 0 0 1-1.0824-1.0824C3 18.3978 3 17.9319 3 17M6 3c-.9319 0-1.3978 0-1.7654.1522a2 2 0 0 0-1.0824 1.0824C3 4.6022 3 5.0681 3 6v1m18 4v4m-5-9h-1.9296a2 2 0 0 1-1.6641-.8906l-.8126-1.2188A2 2 0 0 0 9.9297 3H8M3 13v2m0-6v2m13 9h-3m-2 0H8"
                strokeWidth="2"
            />
        </svg>
    );
}
export default FolderCreate;
