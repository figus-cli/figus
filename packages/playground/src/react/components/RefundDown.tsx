import React, { SVGProps } from "react";

export function RefundDown(props: SVGProps<SVGSVGElement>) {
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
                d="m16 20-.7071.7071.7071.7071.7071-.7071L16 20ZM4 15c0 .5523.4477 1 1 1s1-.4477 1-1H4Zm6.2929.7071 5 5 1.4142-1.4142-5-5-1.4142 1.4142Zm6.4142 5 5-5-1.4142-1.4142-5 5 1.4142 1.4142ZM17 20V9.5h-2V20h2ZM4 9.5V15h2V9.5H4ZM10.5 3C6.9101 3 4 5.9101 4 9.5h2C6 7.0147 8.0147 5 10.5 5V3ZM17 9.5C17 5.9101 14.0899 3 10.5 3v2C12.9853 5 15 7.0147 15 9.5h2Z"
            />
        </svg>
    );
}
export default RefundDown;
