import React, { SVGProps } from "react";

export function FolderLineLight(props: SVGProps<SVGSVGElement>) {
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
                d="M4.5 11.5h15"
                strokeMiterlimit="1.4142"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M4.5 6.9c0-.84 0-1.2601.1635-1.581a1.5 1.5 0 0 1 .6555-.6555C5.64 4.5 6.06 4.5 6.9 4.5h2.5724c.3757 0 .5635 0 .7341.0518.1509.0458.2913.121.4132.2212.1377.1131.2419.2694.4503.582l.86 1.2903c.2084.3127.3126.469.4503.5821.1219.1002.2623.1754.4132.2212.1706.0518.3584.0518.7341.0518H17.1c.8401 0 1.2601 0 1.581.1635a1.5 1.5 0 0 1 .6555.6555c.1635.3209.1635.741.1635 1.581v6.2c0 .8401 0 1.2601-.1635 1.581a1.5002 1.5002 0 0 1-.6555.6555c-.3209.1635-.7409.1635-1.581.1635H6.9c-.84 0-1.2601 0-1.581-.1635a1.5001 1.5001 0 0 1-.6555-.6555C4.5 17.3605 4.5 16.9405 4.5 16.1004V6.9Z"
            />
        </svg>
    );
}
export default FolderLineLight;
