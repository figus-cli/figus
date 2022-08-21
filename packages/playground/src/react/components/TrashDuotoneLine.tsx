import React, { SVGProps } from "react";

export function TrashDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                d="M10 15v-3m4 3v-3"
                strokeWidth="1.2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M3 7h18c-.9319 0-1.3978 0-1.7654.1522-.49.203-.8794.5924-1.0824 1.0824C18 8.6022 18 9.0681 18 10v6c0 1.8856 0 2.8284-.5858 3.4142C16.8284 20 15.8856 20 14 20h-4c-1.8856 0-2.8284 0-3.4142-.5858C6 18.8284 6 17.8856 6 16v-6c0-.9319 0-1.3978-.1522-1.7654a2 2 0 0 0-1.0824-1.0824C4.3978 7 3.9319 7 3 7Z"
                fillOpacity=".24"
                strokeWidth="1.2"
            />
            <path
                stroke="currentColor"
                d="M10.0681 3.3706c.114-.1063.3651-.2003.7144-.2673C11.1318 3.0363 11.5597 3 12 3s.8682.0363 1.2175.1033c.3493.067.6004.161.7144.2673"
                strokeWidth="1.2"
            />
        </svg>
    );
}
export default TrashDuotoneLine;
