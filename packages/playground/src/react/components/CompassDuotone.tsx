import React, { SVGProps } from "react";

export function CompassDuotone(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle
                cx="12"
                cy="12"
                r="9"
                fill="currentColor"
                fillOpacity=".24"
            />
            <path
                fill="currentColor"
                d="M9.831 7.8429c.8497.4583 3.097 1.7644 3.9011 3.1571.804 1.3927.8115 3.9919.7836 4.9569a.233.233 0 0 1-.3468.2002c-.8496-.4583-3.0969-1.7644-3.9009-3.1571-.8041-1.3927-.8116-3.992-.7837-4.957a.233.233 0 0 1 .3468-.2001Z"
            />
        </svg>
    );
}
export default CompassDuotone;
