import React, { SVGProps } from "react";

export function LoadListLight(props: SVGProps<SVGSVGElement>) {
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
                d="M2.5 4.5h19m-17 0h15v12.6c0 .8401 0 1.2601-.1635 1.581a1.5002 1.5002 0 0 1-.6555.6555c-.3209.1635-.7409.1635-1.581.1635H6.9c-.84 0-1.2601 0-1.581-.1635a1.5001 1.5001 0 0 1-.6555-.6555C4.5 18.3601 4.5 17.9401 4.5 17.1V4.5Zm7.5 11V10"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="m9.5 11.5 2.4063-1.925a.15.15 0 0 1 .1874 0L14.5 11.5"
            />
        </svg>
    );
}
export default LoadListLight;
