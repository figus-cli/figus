import React, { SVGProps } from "react";

export function PaperDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                d="M15 5.705V21l-3-1-3 1-3-1-3 1V6.4861c0-1.3912 0-2.0868.331-2.5882a2 2 0 0 1 .567-.5669C4.3992 3 5.0948 3 6.486 3h8.6134c.8689 0 1.2101 1.127.4871 1.609A1.3173 1.3173 0 0 0 15 5.705Z"
            />
            <path
                stroke="currentColor"
                d="M18 3c1.6569 0 3 1.3431 3 3v2.143c0 .334 0 .5012-.0766.6231a.5005.5005 0 0 1-.1574.1574C20.644 9 20.477 9 20.1429 9H15m3-6c-1.6569 0-3 1.3431-3 3v3m3-6H7c-1.8856 0-2.8284 0-3.4142.5858C3 4.1716 3 5.1144 3 7v14l3-1 3 1 3-1 3 1V9"
            />
            <path stroke="currentColor" d="M7 7h4m-3 4H7m0 4h3" />
        </svg>
    );
}
export default PaperDuotoneLine;
