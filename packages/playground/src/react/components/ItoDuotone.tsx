import React, { SVGProps } from "react";

export function ItoDuotone(props: SVGProps<SVGSVGElement>) {
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
                d="M5.6 7c0-.7732.6268-1.4 1.4-1.4h8c1.8778 0 3.4 1.5222 3.4 3.4v8c0 .7732-.6268 1.4-1.4 1.4H7c-.7732 0-1.4-.6268-1.4-1.4V7Z"
                fillOpacity=".24"
                strokeWidth="1.2"
            />
            <path
                stroke="currentColor"
                d="M9 6V2m0 20v-4m6 4v-4m7-3h-4M6 15H2m4-6H2m13-6.4A6.4 6.4 0 0 1 21.4 9"
                strokeWidth="1.2"
            />
        </svg>
    );
}
export default ItoDuotone;
