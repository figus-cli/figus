import React, { SVGProps } from "react";

export function NavigateDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                d="m8.5 10.5 3.4752 1.9858a.0499.0499 0 0 0 .0496 0L15.5 10.5"
                strokeOpacity=".24"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="m4.5456 19.4028 7.4091-15.8062a.05.05 0 0 1 .0906 0l7.4091 15.8062a.05.05 0 0 1-.0581.0695l-7.3834-1.9689a.0513.0513 0 0 0-.0258 0l-7.3834 1.9689a.05.05 0 0 1-.0581-.0695Z"
            />
        </svg>
    );
}
export default NavigateDuotoneLine;
