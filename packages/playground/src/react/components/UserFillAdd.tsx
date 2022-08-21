import React, { SVGProps } from "react";

export function UserFillAdd(props: SVGProps<SVGSVGElement>) {
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
                d="M13.3249 15.0763A11.5128 11.5128 0 0 0 12 15c-1.9812 0-3.907.5085-5.4789 1.4465-1.2204.7284-2.1744 1.6842-2.78 2.7718-.2747.4934.0545 1.0719.6073 1.1871A37.5051 37.5051 0 0 0 15 21.074V21h-1c-1.6569 0-3-1.3431-3-3 0-1.4247.9932-2.6175 2.3249-2.9237Z"
            />
            <path stroke="currentColor" d="M18 14v8m4-4h-8" />
            <circle cx="12" cy="8" r="5" fill="currentColor" />
        </svg>
    );
}
export default UserFillAdd;
