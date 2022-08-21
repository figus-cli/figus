import React, { SVGProps } from "react";

export function ClockLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="12" r="8.5" stroke="currentColor" />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M5 2.8039A6 6 0 0 0 2.8039 5M19 2.8039A6.0009 6.0009 0 0 1 21.1962 5M12 6.5v5.25a.25.25 0 0 0 .25.25h4.25"
            />
        </svg>
    );
}
export default ClockLight;
