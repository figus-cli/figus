import React, { SVGProps } from "react";

export function PipeLight(props: SVGProps<SVGSVGElement>) {
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
                d="M5.817 16.2453a7.4989 7.4989 0 0 0 4.8196 3.1301 7.5001 7.5001 0 1 0 1.9482-14.8522l.2772 1.0346a6.4993 6.4993 0 0 1 4.6809 3.0474 6.5002 6.5002 0 0 1-6.7245 9.7869 6.5002 6.5002 0 0 1-3.9668-2.424l-1.0346.2772Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
            <path
                stroke="currentColor"
                d="M5.9124 4.0665a10 10 0 0 1 2.548-1.4191c.4194-.1587.629-.238.8265-.1369.1975.1012.2596.3329.3837.7962l2.0706 7.7274c.122.4553.183.683.0794.8623-.1035.1794-.3312.2404-.7865.3624l-7.7274 2.0706c-.4633.1241-.695.1862-.8814.0658-.1863-.1205-.2225-.3417-.2947-.7843a9.9998 9.9998 0 0 1 3.7818-9.5444Z"
            />
        </svg>
    );
}
export default PipeLight;
