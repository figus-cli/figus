import React, { SVGProps } from "react";

export function CheckRingRoundDuotoneLine(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="12" r="9" fill="currentColor" />
            <path stroke="currentColor" d="M12 21a9 9 0 1 0-6.364-2.636" />
            <path
                stroke="currentColor"
                d="m16 10-3.598 4.3175c-.6555.7867-.9833 1.1801-1.4239 1.2001-.4406.0199-.8026-.3421-1.5267-1.0662L8 13"
            />
        </svg>
    );
}
export default CheckRingRoundDuotoneLine;
