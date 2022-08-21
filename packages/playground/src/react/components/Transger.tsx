import React, { SVGProps } from "react";

export function Transger(props: SVGProps<SVGSVGElement>) {
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
                d="M13 17H9v2.5885c0 .1669-.1923.2604-.3236.1573L2 14.5l6.6764-5.2458c.1313-.103.3236-.0096.3236.1573V12h6"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M11 7h4V4.4115c0-.1669.1923-.2604.3236-.1573L22 9.5l-6.6764 5.2458c-.1313.1031-.3236.0096-.3236-.1573V12H9"
            />
        </svg>
    );
}
export default Transger;
