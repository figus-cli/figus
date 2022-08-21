import React, { SVGProps } from "react";

export function SadAltLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="12" r="9.5" stroke="currentColor" />
            <path
                stroke="currentColor"
                d="M8.2086 16.622c.4218-.3653.999-.6457 1.6527-.8344C10.5191 15.5977 11.256 15.5 12 15.5s1.4809.0977 2.1387.2876c.6538.1887 1.2309.4691 1.6527.8344"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M9.5 9c.2403 0 .3604 0 .433.1225.0727.1224.03.2006-.0554.357a.9998.9998 0 0 1-1.5847.2276 1.0002 1.0002 0 0 1-.1705-.2277c-.0854-.1563-.1281-.2345-.0555-.357C8.1396 9 8.2597 9 8.5 9h1Zm6 0c.2403 0 .3604 0 .4331.1225.0726.1224.0299.2006-.0555.357a1.0002 1.0002 0 0 1-1.7552 0c-.0854-.1564-.1281-.2346-.0555-.357C14.1396 9 14.2597 9 14.5 9h1Z"
            />
        </svg>
    );
}
export default SadAltLight;
