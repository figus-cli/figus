import React, { SVGProps } from "react";

export function GpsFixedFill(props: SVGProps<SVGSVGElement>) {
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
                d="M12 19c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7Zm0-4c1.6569 0 3-1.3431 3-3s-1.3431-3-3-3-3 1.3431-3 3 1.3431 3 3 3Z"
            />
            <path stroke="currentColor" d="M12 5V3m7 9h2m-9 9v-2m-9-7h2" />
        </svg>
    );
}
export default GpsFixedFill;
