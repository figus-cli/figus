import React, { SVGProps } from "react";

export function TimeProgressDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                d="M12 4v2"
                strokeOpacity=".24"
                strokeWidth="1.2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M12 11.9996 6.0586 6.0664"
                strokeWidth="1.2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M20 12h-2m-6 6v2m-6-8H4"
                strokeOpacity=".24"
                strokeWidth="1.2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M12 3.6a8.4 8.4 0 1 1-5.9397 2.4603"
                strokeWidth="1.2"
            />
        </svg>
    );
}
export default TimeProgressDuotoneLine;
