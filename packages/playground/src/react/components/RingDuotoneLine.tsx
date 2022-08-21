import React, { SVGProps } from "react";

export function RingDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                d="M12 6.5c-2.057 0-3.85 1.4-4.3489 3.3955l-.7282 2.913a4.5103 4.5103 0 0 1-1.8737 2.6587c-.464.3094-.245 1.0328.3128 1.0328h13.276c.5577 0 .7768-.7234.3127-1.0328a4.5103 4.5103 0 0 1-1.8737-2.6587l-.7282-2.913C15.85 7.8999 14.057 6.5 12 6.5Zm0 0V3"
                strokeOpacity=".24"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M9.5852 18.647a2.5 2.5 0 0 0 4.8296 0"
            />
        </svg>
    );
}
export default RingDuotoneLine;
