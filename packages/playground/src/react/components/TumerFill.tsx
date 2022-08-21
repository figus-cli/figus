import React, { SVGProps } from "react";

export function TumerFill(props: SVGProps<SVGSVGElement>) {
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
                d="M21 14c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Zm-9 5c2.7614 0 5-2.2386 5-5s-2.2386-5-5-5-5 2.2386-5 5 2.2386 5 5 5Zm0 2c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7Zm1-10c0-.5523-.4477-1-1-1s-1 .4477-1 1v3c0 .5523.4477 1 1 1s1-.4477 1-1v-3Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
            <path
                stroke="currentColor"
                d="M17.5 7.5 19 6m-8.9319-3.6294c.114-.1063.3651-.2003.7144-.2673C11.1318 2.0363 11.5597 2 12 2s.8682.0363 1.2175.1033c.3493.067.6004.161.7144.2673"
                strokeWidth="2"
            />
        </svg>
    );
}
export default TumerFill;
