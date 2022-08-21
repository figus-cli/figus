import React, { SVGProps } from "react";

export function StackframeFill(props: SVGProps<SVGSVGElement>) {
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
                d="M5 10c0-1.8856 0-2.8284.5858-3.4142C6.1716 6 7.1144 6 9 6h3.1265c.9213 0 1.3819 0 1.7851.1888.4031.1888.698.5427 1.2878 1.2505l1.6667 2c1.0203 1.2244 1.5305 1.8366 1.5305 2.5607 0 .7241-.5102 1.3363-1.5305 2.5607l-1.6667 2c-.5898.7078-.8847 1.0617-1.2878 1.2505C13.5084 18 13.0478 18 12.1265 18H9c-1.8856 0-2.8284 0-3.4142-.5858C5 16.8284 5 15.8856 5 14v-4Z"
            />
        </svg>
    );
}
export default StackframeFill;
