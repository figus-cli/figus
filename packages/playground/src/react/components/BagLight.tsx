import React, { SVGProps } from "react";

export function BagLight(props: SVGProps<SVGSVGElement>) {
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
                d="M7.5 8.5V8c0-.4643 0-.6965.0193-.892.187-1.8992 1.6895-3.4017 3.5886-3.5887C11.3035 3.5 11.5357 3.5 12 3.5s.6965 0 .8921.0193c1.8991.187 3.4016 1.6895 3.5886 3.5886.0193.1956.0193.4278.0193.8921v.5m-1 5v-2m-7 2v-2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M5.5 12.1c0-1.6971 0-2.5456.5272-3.0728C6.5544 8.5 7.403 8.5 9.1 8.5h5.8c1.6971 0 2.5456 0 3.0728.5272.5272.5272.5272 1.3757.5272 3.0728v2.4c0 2.8284 0 4.2426-.8787 5.1213-.8787.8787-2.2929.8787-5.1213.8787h-1c-2.8284 0-4.2426 0-5.1213-.8787C5.5 18.7426 5.5 17.3284 5.5 14.5v-2.4Z"
            />
        </svg>
    );
}
export default BagLight;
