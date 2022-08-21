import React, { SVGProps } from "react";

export function TransferLeftLight(props: SVGProps<SVGSVGElement>) {
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
                d="M19 15h-7v3.5172c0 .1781-.2154.2674-.3414.1414L5 12l6.6586-6.6586c.126-.126.3414-.0367.3414.1414V9h7"
            />
        </svg>
    );
}
export default TransferLeftLight;
