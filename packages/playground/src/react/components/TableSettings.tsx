import React, { SVGProps } from "react";

export function TableSettings(props: SVGProps<SVGSVGElement>) {
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
                d="M9 18H5c-1.1046 0-2-.8954-2-2V6c0-1.1046.8954-2 2-2h12c1.1046 0 2 .8954 2 2v2M4 8h16M4 13h5"
            />
            <path
                stroke="currentColor"
                d="M11.5408 16.9723a2.0002 2.0002 0 0 1 0-1.9446l.6747-1.2127.7129-1.1906a2.0002 2.0002 0 0 1 1.684-.9723L16 11.63l1.3876.0221a2.0002 2.0002 0 0 1 1.684.9723l.7129 1.1906.6747 1.2127a2.0002 2.0002 0 0 1 0 1.9446l-.6747 1.2127-.7129 1.1906a2.0002 2.0002 0 0 1-1.684.9723L16 20.37l-1.3876-.0221a2.0002 2.0002 0 0 1-1.684-.9723l-.7129-1.1906-.6747-1.2127Z"
            />
            <circle cx="16" cy="16" r="1" fill="currentColor" />
        </svg>
    );
}
export default TableSettings;
