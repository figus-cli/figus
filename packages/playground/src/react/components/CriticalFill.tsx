import React, { SVGProps } from "react";

export function CriticalFill(props: SVGProps<SVGSVGElement>) {
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
                d="M20.9445 15.002c.0613.5489-.3922.998-.9445.998h-3.0051c-.5522 0-.9876-.4545-1.1245-.9896a3.9942 3.9942 0 0 0-.7143-1.4596l3.5515-3.5515a9.0002 9.0002 0 0 1 2.2369 5.0027Zm-2.9441-5.7098A8.9998 8.9998 0 0 0 12.5 7.0139v5.0226a3.994 3.994 0 0 1 1.9489.8072l3.5515-3.5515Zm-8.4493 3.5515a3.9942 3.9942 0 0 1 1.9489-.8072V7.0139a9.0002 9.0002 0 0 0-5.5004 2.2783l3.5515 3.5515ZM5.2924 9.9993a9.0006 9.0006 0 0 0-2.237 5.0027c-.0612.5489.3923.998.9446.998h3.005c.5523 0 .9877-.4545 1.1246-.9896a3.9951 3.9951 0 0 1 .7143-1.4596L5.2924 9.9993Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default CriticalFill;
