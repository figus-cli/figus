import React, { SVGProps } from "react";

export function InfoDuotoneLine(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle
                r="10"
                fill="currentColor"
                stroke="currentColor"
                fillOpacity=".24"
                strokeWidth="1.2"
                transform="matrix(-1 0 0 1 12 12)"
            />
            <path stroke="currentColor" d="M12 12v6m0-11V6" strokeWidth="1.2" />
        </svg>
    );
}
export default InfoDuotoneLine;
