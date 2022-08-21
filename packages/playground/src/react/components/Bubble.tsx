import React, { SVGProps } from "react";

export function Bubble(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="17" cy="8" r="4" stroke="currentColor" />
            <circle cx="12" cy="17" r="3" stroke="currentColor" />
            <circle cx="6.5" cy="9.5" r="2.5" stroke="currentColor" />
        </svg>
    );
}
export default Bubble;
