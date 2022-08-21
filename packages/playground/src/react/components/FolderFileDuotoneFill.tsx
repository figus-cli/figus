import React, { SVGProps } from "react";

export function FolderFileDuotoneFill(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <rect
                width="12"
                height="10"
                x="6"
                y="3"
                fill="currentColor"
                rx="2"
            />
            <path
                fill="currentColor"
                d="M3 10h14.8c1.1201 0 1.6802 0 2.108.218.3763.1917.6823.4977.874.874.218.4278.218.9879.218 2.108v4.6c0 1.1201 0 1.6802-.218 2.108a1.9996 1.9996 0 0 1-.874.874C19.4802 21 18.9201 21 17.8 21H6.2c-1.1201 0-1.6802 0-2.108-.218a1.9997 1.9997 0 0 1-.874-.874C3 19.4802 3 18.9201 3 17.8V10Zm0 0c0-.9319 0-1.3978.1522-1.7654a2 2 0 0 1 1.0824-1.0824C4.6022 7 5.0681 7 6 7h2.3431c.8176 0 1.2263 0 1.5938.1522.3676.1523.6566.4413 1.2347 1.0194L13 10H3Z"
            />
        </svg>
    );
}
export default FolderFileDuotoneFill;
