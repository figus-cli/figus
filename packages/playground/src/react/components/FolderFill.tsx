import React, { SVGProps } from "react";

export function FolderFill(props: SVGProps<SVGSVGElement>) {
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
                d="M3 8h13.2c1.6802 0 2.5202 0 3.162.327a2.9997 2.9997 0 0 1 1.311 1.311C21 10.2798 21 11.1198 21 12.8v1.4c0 1.6802 0 2.5202-.327 3.162a2.9994 2.9994 0 0 1-1.311 1.311C18.7202 19 17.8802 19 16.2 19H7.8c-1.6802 0-2.5202 0-3.162-.327a2.9997 2.9997 0 0 1-1.311-1.311C3 16.7202 3 15.8802 3 14.2V8Zm0 0c0-.9319 0-1.3978.1522-1.7654a2 2 0 0 1 1.0824-1.0824C4.6022 5 5.0681 5 6 5h2.3431c.8176 0 1.2263 0 1.5938.1522.3676.1523.6566.4413 1.2347 1.0194L13 8H3Z"
            />
        </svg>
    );
}
export default FolderFill;
