import React, { SVGProps } from "react";

export function SadLight(props: SVGProps<SVGSVGElement>) {
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
            <circle
                cx="9"
                cy="10"
                r="1"
                fill="currentColor"
                stroke="currentColor"
            />
            <circle
                cx="15"
                cy="10"
                r="1"
                fill="currentColor"
                stroke="currentColor"
            />
        </svg>
    );
}
export default SadLight;
