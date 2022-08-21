import React, { SVGProps } from "react";

export function PieChartLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="12" r="9" stroke="currentColor" />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M12 12h9m-9-9v8.9379c0 .0398.0158.0779.0439.106L18 18"
            />
        </svg>
    );
}
export default PieChartLight;
