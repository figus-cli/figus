import React, { SVGProps } from "react";

export function DataBank(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                stroke="currentColor"
                d="M6 14h12c1.6569 0 3 1.3431 3 3s-1.3431 3-3 3H6c-1.6569 0-3-1.3431-3-3s1.3431-3 3-3Z"
            />
            <path
                stroke="currentColor"
                d="M3 17c0-1.4101 1.4912-7.2938 2.371-10.6421.2193-.8349.329-1.2524.571-1.57a2.0138 2.0138 0 0 1 .8228-.6345C7.1335 4 7.5704 4 8.4442 4h7.1117c.8737 0 1.3106 0 1.6793.1534.3231.1343.6108.3562.8228.6345.242.3176.3517.7351.5711 1.57C19.5088 9.7062 21 15.5899 21 17"
            />
            <rect
                width="2"
                height="2"
                x="17"
                y="16"
                fill="currentColor"
                rx="1"
            />
            <rect
                width="4"
                height="2"
                x="5"
                y="16"
                fill="currentColor"
                rx="1"
            />
        </svg>
    );
}
export default DataBank;
