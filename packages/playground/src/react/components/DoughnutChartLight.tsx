import React, { SVGProps } from "react";

export function DoughnutChartLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="12" r="9" stroke="currentColor" />
            <circle cx="12" cy="12" r="4" stroke="currentColor" />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M12 3v4.5M18 18l-3-3m3-9-3 3M3 12h4.5"
            />
        </svg>
    );
}
export default DoughnutChartLight;
