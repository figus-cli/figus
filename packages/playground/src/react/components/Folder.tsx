import React, { SVGProps } from "react";

export function Folder(props: SVGProps<SVGSVGElement>) {
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
                d="M4 9c0-1.8856 0-2.8284.5858-3.4142C5.1716 5 6.1144 5 8 5h.3431c.8176 0 1.2263 0 1.5938.1522.3676.1523.6566.4413 1.2347 1.0194l.6568.6568c.5781.578.8671.8671 1.2347 1.0194C13.4306 8 13.8394 8 14.6569 8H16c1.8856 0 2.8284 0 3.4142.5858C20 9.1716 20 10.1144 20 12v3c0 1.8856 0 2.8284-.5858 3.4142C18.8284 19 17.8856 19 16 19H8c-1.8856 0-2.8284 0-3.4142-.5858C4 17.8284 4 16.8856 4 15V9Z"
                strokeWidth="2"
            />
        </svg>
    );
}
export default Folder;
