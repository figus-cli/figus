import React, { SVGProps } from "react";

export function MoleculeLight(props: SVGProps<SVGSVGElement>) {
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
                stroke="currentColor"
                d="m10 14-3.5 3.5m4-7L6 6"
                strokeLinejoin="round"
            />
            <circle cx="17" cy="17" r="1.5" stroke="currentColor" />
            <circle cx="20" cy="12" r="1.5" stroke="currentColor" />
            <path
                stroke="currentColor"
                d="M18.5 12h-4"
                strokeLinejoin="round"
            />
            <path
                fill="currentColor"
                d="m13.6464 14.3536 2 2 .7072-.7072-2-2-.7072.7072Z"
            />
            <circle cx="19" cy="5" r="2.5" stroke="currentColor" />
            <path stroke="currentColor" d="m17 7-3 3" strokeLinejoin="round" />
            <circle cx="5" cy="5" r="1.5" stroke="currentColor" />
            <circle cx="5" cy="19" r="2.5" stroke="currentColor" />
        </svg>
    );
}
export default MoleculeLight;
