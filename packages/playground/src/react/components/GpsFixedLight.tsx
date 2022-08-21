import React, { SVGProps } from "react";

export function GpsFixedLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="12" r="7" stroke="currentColor" />
            <circle
                cx="12"
                cy="12"
                r="2"
                fill="currentColor"
                stroke="currentColor"
            />
            <path stroke="currentColor" d="M12 5V3m7 9h2m-9 9v-2m-9-7h2" />
        </svg>
    );
}
export default GpsFixedLight;
