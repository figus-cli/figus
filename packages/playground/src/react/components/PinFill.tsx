import React, { SVGProps } from "react";

export function PinFill(props: SVGProps<SVGSVGElement>) {
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
                d="M12.398 19.804C13.881 19.0348 19 16.0163 19 11c0-3.866-3.134-7-7-7s-7 3.134-7 7c0 5.0163 5.119 8.0348 6.602 8.804a.8547.8547 0 0 0 .796 0ZM12 14c1.6569 0 3-1.3431 3-3s-1.3431-3-3-3-3 1.3431-3 3 1.3431 3 3 3Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default PinFill;
