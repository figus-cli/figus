import React, { SVGProps } from "react";

export function PlayFill(props: SVGProps<SVGSVGElement>) {
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
                d="M16.1378 10.5689 9.605 7.3025C8.4082 6.7041 7 7.5744 7 8.9125v6.1751c0 1.3381 1.4082 2.2083 2.605 1.6099l6.5328-3.2664c1.1793-.5896 1.1793-2.2725 0-2.8622Z"
            />
        </svg>
    );
}
export default PlayFill;
