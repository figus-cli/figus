import React, { SVGProps } from "react";

export function Tumer(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="14" r="8" stroke="currentColor" />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M12 14v-3m5.5-3.5L19 6m-8.9319-3.6294c.114-.1063.3651-.2003.7144-.2673C11.1318 2.0363 11.5597 2 12 2s.8682.0363 1.2175.1033c.3493.067.6004.161.7144.2673"
            />
        </svg>
    );
}
export default Tumer;
