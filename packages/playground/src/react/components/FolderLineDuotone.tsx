import React, { SVGProps } from "react";

export function FolderLineDuotone(props: SVGProps<SVGSVGElement>) {
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
                d="M3 7h16c1.1046 0 2 .8954 2 2H3V7Z"
                fillOpacity=".24"
            />
            <path
                fill="currentColor"
                d="M3 10h18v4.2c0 1.6802 0 2.5202-.327 3.162a2.9994 2.9994 0 0 1-1.311 1.311C18.7202 19 17.8802 19 16.2 19H7.8c-1.6802 0-2.5202 0-3.162-.327a2.9997 2.9997 0 0 1-1.311-1.311C3 16.7202 3 15.8802 3 14.2V10Z"
            />
            <path
                fill="currentColor"
                d="M3 7c0-.9319 0-1.3978.1522-1.7654a2 2 0 0 1 1.0824-1.0824C4.6022 4 5.0681 4 6 4h2.3431c.8176 0 1.2263 0 1.5938.1522.3676.1523.6566.4413 1.2347 1.0194L13 7H3Z"
                fillOpacity=".24"
            />
        </svg>
    );
}
export default FolderLineDuotone;
