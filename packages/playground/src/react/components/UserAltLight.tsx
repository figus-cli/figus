import React, { SVGProps } from "react";

export function UserAltLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="8" r="3.5" stroke="currentColor" />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M4.8491 16.9479C5.4888 14.6034 7.9147 13.5 10.345 13.5h3.31c2.4303 0 4.8562 1.1034 5.4959 3.4479a9.9508 9.9508 0 0 1 .2953 1.5536c.059.5492-.3939.9985-.9462.9985h-13c-.5523 0-1.0052-.4493-.9462-.9985a9.9403 9.9403 0 0 1 .2953-1.5536Z"
            />
        </svg>
    );
}
export default UserAltLight;
