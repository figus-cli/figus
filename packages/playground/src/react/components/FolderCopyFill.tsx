import React, { SVGProps } from "react";

export function FolderCopyFill(props: SVGProps<SVGSVGElement>) {
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
                d="M6 7H5c-1.1046 0-2 .8954-2 2v1m3 10H5c-1.1046 0-2-.8954-2-2v-1m10 3h1c1.1046 0 2-.8954 2-2v-1m-5 3H8m-5-8v3"
                strokeMiterlimit="1.4142"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                d="M8 6.2c0-1.1201 0-1.6802.218-2.108a1.9999 1.9999 0 0 1 .874-.874C9.5198 3 10.08 3 11.2 3h1.3012c.5509 0 .8264 0 1.0817.0687a2 2 0 0 1 .6314.2957c.2162.1522.3925.3638.7452.787L16.5 6h2.3c1.1201 0 1.6802 0 2.108.218.3763.1917.6823.4977.874.874C22 7.5198 22 8.08 22 9.2v2.6c0 1.1201 0 1.6802-.218 2.108a1.9996 1.9996 0 0 1-.874.874C20.4802 15 19.9201 15 18.8 15h-7.6c-1.1201 0-1.6802 0-2.108-.218a1.9997 1.9997 0 0 1-.874-.874C8 13.4802 8 12.9201 8 11.8V6.2Z"
            />
        </svg>
    );
}
export default FolderCopyFill;
