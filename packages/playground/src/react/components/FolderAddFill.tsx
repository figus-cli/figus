import React, { SVGProps } from "react";

export function FolderAddFill(props: SVGProps<SVGSVGElement>) {
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
                d="M3 8h14.8c1.1201 0 1.6802 0 2.108.218.3763.1917.6823.4977.874.874.218.4278.218.988.218 2.108v5.6c0 1.1201 0 1.6802-.218 2.108a1.9996 1.9996 0 0 1-.874.874C19.4802 20 18.9201 20 17.8 20H6.2c-1.1201 0-1.6802 0-2.108-.218a1.9997 1.9997 0 0 1-.874-.874C3 18.4802 3 17.9201 3 16.8V8Zm0 0c0-.9319 0-1.3978.1522-1.7654a2 2 0 0 1 1.0824-1.0824C4.6022 5 5.0681 5 6 5h2.3431c.8176 0 1.2263 0 1.5938.1522.3676.1523.6566.4413 1.2347 1.0194L13 8H3Z"
            />
            <path stroke="currentColor" d="M9 14h3m0 0h3m-3 0v3m0-3v-3" />
        </svg>
    );
}
export default FolderAddFill;
