import React, { SVGProps } from "react";

export function Percent(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path fill="currentColor" stroke="currentColor" d="M20 4 4 20" />
            <circle cx="6.5" cy="7.5" r="3.5" stroke="currentColor" />
            <circle cx="17.5" cy="16.5" r="3.5" stroke="currentColor" />
        </svg>
    );
}
export default Percent;
