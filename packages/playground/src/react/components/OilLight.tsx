import React, { SVGProps } from "react";

export function OilLight(props: SVGProps<SVGSVGElement>) {
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
                d="m18 8-5 3-2-2H7m11-1 3 3m-3-3-4 7H3V9h4m0 0V4m0 0H4m3 0h3M3 21l1.5-1.5c.0796-.0797.1195-.1195.1547-.1515.7629-.6934 1.9277-.6934 2.6906 0 .0352.032.075.0718.1547.1515l.1485.1485c.7464.7464 1.9566.7464 2.703 0l.3737-.3737c.6595-.6595 1.7575-.5508 2.2748.2252.5173.776 1.6153.8847 2.2748.2252l.3737-.3737c.7464-.7464 1.9566-.7464 2.703 0L20 21"
                strokeLinejoin="round"
            />
        </svg>
    );
}
export default OilLight;
