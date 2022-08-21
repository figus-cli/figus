import React, { SVGProps } from "react";

export function Angry(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="12" r="10" stroke="currentColor" />
            <path
                stroke="currentColor"
                d="M7.8812 16.2441c.4927-.4267 1.1419-.735 1.8415-.9369C10.43 15.103 11.2142 15 12 15c.7858 0 1.5699.103 2.2774.3072.6995.2019 1.3487.5102 1.8414.9369M17 8l-3 2M7 8l3 2"
            />
            <circle
                cx="8"
                cy="10"
                r="1.25"
                fill="currentColor"
                stroke="currentColor"
            />
            <circle
                cx="16"
                cy="10"
                r="1.25"
                fill="currentColor"
                stroke="currentColor"
            />
        </svg>
    );
}
export default Angry;
