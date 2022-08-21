import React, { SVGProps } from "react";

export function Molecule(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="12" r="3" stroke="currentColor" />
            <path stroke="currentColor" d="m10 14-3 3m3.5-6.5L6 6" />
            <circle cx="18" cy="19" r="1" stroke="currentColor" />
            <path
                fill="currentColor"
                d="m13.2191 14.6247 4 5 1.5618-1.2494-4-5-1.5618 1.2494Z"
            />
            <circle cx="19" cy="5" r="2" stroke="currentColor" />
            <path stroke="currentColor" d="m17 7-3 3" />
            <circle cx="5.5" cy="5.5" r="2.5" fill="currentColor" />
            <circle cx="5.5" cy="18.5" r="2.5" stroke="currentColor" />
        </svg>
    );
}
export default Molecule;
