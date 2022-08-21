import React, { SVGProps } from "react";

export function ViewAltDuotoneLine(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="12" r="2.5" stroke="currentColor" />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M18.2265 11.3805c.1287.2535.193.3802.193.6195 0 .2393-.0643.366-.193.6195C17.6001 13.8533 15.812 16.5 12 16.5s-5.6-2.6467-6.2265-3.8805c-.1287-.2535-.193-.3802-.193-.6195 0-.2393.0643-.366.193-.6195C6.3999 10.1467 8.188 7.5 12 7.5s5.6001 2.6467 6.2265 3.8805Z"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M17.5 3.5h.2c1.7913 0 2.687 0 3.2435.5565C21.5 4.613 21.5 5.5087 21.5 7.3v.2m-4 13h.2c1.7913 0 2.687 0 3.2435-.5565.5565-.5565.5565-1.4522.5565-3.2435v-.2m-15-13h-.2c-1.7913 0-2.687 0-3.2435.5565C2.5 4.613 2.5 5.5087 2.5 7.3v.2m4 13h-.2c-1.7913 0-2.687 0-3.2435-.5565C2.5 19.387 2.5 18.4913 2.5 16.7v-.2"
            />
        </svg>
    );
}
export default ViewAltDuotoneLine;
