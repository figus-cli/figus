import React, { SVGProps } from "react";

export function CloudAlt(props: SVGProps<SVGSVGElement>) {
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
                d="m10.5278 8 .7451.667-.2981.333h-.447V8ZM15 7c-1.4807 0-2.8101.6424-3.7271 1.667L9.7827 7.333C11.063 5.9027 12.9267 5 15 5v2Zm5 5c0-2.7614-2.2386-5-5-5V5c3.866 0 7 3.134 7 7h-2Zm-5 5c2.7614 0 5-2.2386 5-5h2c0 3.866-3.134 7-7 7v-2Zm-7 0h7v2H8v-2Zm-4-4c0 2.2091 1.7909 4 4 4v2c-3.3137 0-6-2.6863-6-6h2Zm4-4c-2.2091 0-4 1.7909-4 4H2c0-3.3137 2.6863-6 6-6v2Zm2.5278 0H8V7h2.5278v2Z"
            />
            <path
                stroke="currentColor"
                d="M16.3177 17.8535a5.9997 5.9997 0 0 0 4.3464-7.833 6.0004 6.0004 0 0 0-8.2793-3.4206A5.9999 5.9999 0 0 0 9 12.0236"
                strokeWidth="2"
            />
        </svg>
    );
}
export default CloudAlt;
