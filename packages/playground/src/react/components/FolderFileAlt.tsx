import React, { SVGProps } from "react";

export function FolderFileAlt(props: SVGProps<SVGSVGElement>) {
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
                d="M4 13.2c0-1.1201 0-1.6802.218-2.108a1.9997 1.9997 0 0 1 .874-.874C5.5198 10 6.08 10 7.2 10h1.4745c.4892 0 .7338 0 .964.0553.204.049.3991.1298.5781.2394.2018.1237.3748.2967.7207.6426l1.1254 1.1254c.3459.3459.5189.5189.7207.6426a2.003 2.003 0 0 0 .5781.2394c.2302.0553.4748.0553.964.0553H16.8c1.1201 0 1.6802 0 2.108.218.3763.1917.6823.4977.874.874.218.4278.218.9879.218 2.108v1.6c0 1.1201 0 1.6802-.218 2.108a1.9996 1.9996 0 0 1-.874.874C18.4802 21 17.9201 21 16.8 21H7.2c-1.1201 0-1.6802 0-2.108-.218a1.9997 1.9997 0 0 1-.874-.874C4 19.4802 4 18.9201 4 17.8v-4.6Z"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M18 13V7l-3-3H9.2c-1.1201 0-1.6802 0-2.108.218a1.9999 1.9999 0 0 0-.874.874C6 5.5198 6 6.08 6 7.2V10"
                strokeLinejoin="round"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M13 4v3.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C13.7599 9 14.0399 9 14.6 9H18"
                strokeLinejoin="round"
                strokeWidth="2"
            />
        </svg>
    );
}
export default FolderFileAlt;
