import React, { SVGProps } from "react";

export function TargetFill(props: SVGProps<SVGSVGElement>) {
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
            <path
                stroke="currentColor"
                d="M7.0502 7.05 5 5m11.9498 2.05L19 5m-.0002 13.9998-2.05-2.05M5 19l2.0503-2.0498"
            />
        </svg>
    );
}
export default TargetFill;
