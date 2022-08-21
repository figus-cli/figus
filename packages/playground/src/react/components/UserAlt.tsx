import React, { SVGProps } from "react";

export function UserAlt(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle
                cx="12"
                cy="7"
                r="4"
                stroke="currentColor"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M5.3379 18.3206C5.9989 15.5269 8.7717 14 11.6426 14h.7148c2.8709 0 5.6436 1.5269 6.3047 4.3206.1279.5405.2296 1.1062.2868 1.681.0547.5496-.3966.9984-.9489.9984H6c-.5523 0-1.0036-.4488-.9489-.9984.0572-.5748.1589-1.1405.2868-1.681Z"
                strokeWidth="2"
            />
        </svg>
    );
}
export default UserAlt;
