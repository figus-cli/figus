import React, { SVGProps } from "react";

export function RingLight(props: SVGProps<SVGSVGElement>) {
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
                d="M7.3424 12.9456C7.7219 10.6688 9.6918 9 12 9c2.3082 0 4.2781 1.6688 4.6576 3.9456l.1029.6175A4.5459 4.5459 0 0 0 18.03 16.03c.358.358.1045.97-.4017.97H6.3717c-.5062 0-.7597-.612-.4017-.97a4.5455 4.5455 0 0 0 1.2695-2.4669l.1029-.6175Z"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="m11 9 1-6m1 6-1-6m-1.9319 17.6294c.114.1063.3651.2003.7144.2673.3493.067.7772.1033 1.2175.1033s.8682-.0363 1.2175-.1033c.3493-.067.6004-.161.7144-.2673"
            />
        </svg>
    );
}
export default RingLight;
