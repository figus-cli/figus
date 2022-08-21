import React, { SVGProps } from "react";

export function RoflLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="12" r="9.5" stroke="currentColor" />
            <path stroke="currentColor" d="m16 8-8 3m0-3 8 3" />
            <path
                fill="currentColor"
                d="M8 14.5556c0-.0516 0-.0774.0019-.0992a.5.5 0 0 1 .4545-.4545C8.4782 14 8.504 14 8.5556 14h6.8888c.0516 0 .0774 0 .0992.0019a.5.5 0 0 1 .4545.4545c.0019.0218.0019.0476.0019.0992V15c0 2.2091-1.7909 4-4 4-2.2091 0-4-1.7909-4-4v-.4444Z"
            />
        </svg>
    );
}
export default RoflLight;
