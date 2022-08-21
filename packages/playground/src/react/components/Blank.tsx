import React, { SVGProps } from "react";

export function Blank(props: SVGProps<SVGSVGElement>) {
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
                d="M14.1716 21H7c-1.8856 0-2.8284 0-3.4142-.5858C3 19.8284 3 18.8856 3 17V7c0-1.8856 0-2.8284.5858-3.4142C4.1716 3 5.1144 3 7 3h10c1.8856 0 2.8284 0 3.4142.5858C21 4.1716 21 5.1144 21 7v7.1716c0 .4087 0 .6131-.0761.7969-.0761.1837-.2207.3283-.5097.6173l-4.8284 4.8284c-.289.289-.4336.4336-.6173.5097-.1838.0761-.3882.0761-.7969.0761Z"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M14 21v-4.6667c0-1.0999 0-1.6499.3417-1.9916C14.6834 14 15.2334 14 16.3333 14H21"
                strokeWidth="2"
            />
        </svg>
    );
}
export default Blank;
