import React, { SVGProps } from "react";

export function FolderFile(props: SVGProps<SVGSVGElement>) {
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
                d="M4 13c0-1.8856 0-2.8284.5858-3.4142C5.1716 9 6.1144 9 8 9h.3431c.8176 0 1.2263 0 1.5938.1522.3676.1523.6566.4413 1.2347 1.0194l.6568.6568c.5781.5781.8671.8671 1.2347 1.0194.3675.1522.7763.1522 1.5938.1522H16c1.8856 0 2.8284 0 3.4142.5858C20 13.1716 20 14.1144 20 16c0 1.8856 0 2.8284-.5858 3.4142C18.8284 20 17.8856 20 16 20H8c-1.8856 0-2.8284 0-3.4142-.5858C4 18.8284 4 17.8856 4 16v-3Z"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M18 12V8c0-1.8856 0-2.8284-.5858-3.4142C16.8284 4 15.8856 4 14 4h-4c-1.8856 0-2.8284 0-3.4142.5858C6 5.1716 6 6.1144 6 8v1"
            />
        </svg>
    );
}
export default FolderFile;
