import React, { SVGProps } from "react";

export function CloseRingDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                d="M12 20.4a8.4007 8.4007 0 0 1-5.9397-2.4603A8.3994 8.3994 0 0 1 3.6 12a8.4 8.4 0 1 1 8.4 8.4Z"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="m9 9 6 6m0-6-6 6"
            />
        </svg>
    );
}
export default CloseRingDuotoneLine;
