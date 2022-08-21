import React, { SVGProps } from "react";

export function Pipe(props: SVGProps<SVGSVGElement>) {
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
                d="M5.3067 16.3821a8.0004 8.0004 0 0 0 9.757 3.0084 8.0002 8.0002 0 0 0 4.9336-7.1805 7.9995 7.9995 0 0 0-4.5507-7.4291 7.9998 7.9998 0 0 0-2.9986-.768l.5552 2.072a6.0005 6.0005 0 0 1 4.1133 2.7815 6 6 0 0 1-9.7379 6.9605l-2.0719.5552Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
            <path
                stroke="currentColor"
                d="M5.9124 4.0665a10 10 0 0 1 2.548-1.4191c.4194-.1587.629-.238.8265-.1369.1975.1012.2596.3329.3837.7962l2.0706 7.7274c.122.4553.183.683.0794.8623-.1035.1794-.3312.2404-.7865.3624l-7.7274 2.0706c-.4633.1241-.695.1862-.8814.0658-.1863-.1205-.2225-.3417-.2947-.7843a9.9998 9.9998 0 0 1 3.7818-9.5444Z"
                strokeWidth="2"
            />
        </svg>
    );
}
export default Pipe;
