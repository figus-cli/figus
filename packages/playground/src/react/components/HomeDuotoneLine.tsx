import React, { SVGProps } from "react";

export function HomeDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                d="M5.5 10v7.5c0 .9428 0 1.4142.2929 1.7071.2929.2929.7643.2929 1.7071.2929h9c.9428 0 1.4142 0 1.7071-.2929.2929-.2929.2929-.7643.2929-1.7071V10"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="m20.5 11.5-7.9233-5.593a1 1 0 0 0-1.1534 0L3.5 11.5"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M14.5 19v-4c0-1.1046-.8954-2-2-2h-1c-1.1046 0-2 .8954-2 2v4"
            />
            <path fill="currentColor" stroke="currentColor" d="M17.5 9V5.5" />
        </svg>
    );
}
export default HomeDuotoneLine;
