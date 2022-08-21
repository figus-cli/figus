import React, { SVGProps } from "react";

export function Sertificate(props: SVGProps<SVGSVGElement>) {
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
                d="M19 11V8.2c0-1.1201 0-1.6802-.218-2.108a1.9997 1.9997 0 0 0-.874-.874C17.4802 5 16.9201 5 15.8 5H7.2c-1.1201 0-1.6802 0-2.108.218a1.9999 1.9999 0 0 0-.874.874C4 6.5198 4 7.08 4 8.2v5.6c0 1.1201 0 1.6802.218 2.108.1917.3763.4977.6823.874.874C5.5198 17 6.08 17 7.2 17H14m-6-4h4M8 9h7"
                strokeWidth="2"
            />
            <circle
                cx="18"
                cy="15"
                r="1"
                stroke="currentColor"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M20 20s-.5-1-2-1-2 1-2 1"
                strokeWidth="2"
            />
        </svg>
    );
}
export default Sertificate;
