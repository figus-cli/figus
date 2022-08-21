import React, { SVGProps } from "react";

export function PhoneFill(props: SVGProps<SVGSVGElement>) {
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
                d="M6 7c0-1.8856 0-2.8284.5858-3.4142C7.1716 3 8.1144 3 10 3h4c1.8856 0 2.8284 0 3.4142.5858C18 4.1716 18 5.1144 18 7v10c0 1.8856 0 2.8284-.5858 3.4142C16.8284 21 15.8856 21 14 21h-4c-1.8856 0-2.8284 0-3.4142-.5858C6 19.8284 6 18.8856 6 17V7Zm3.5-2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM12 19c.5523 0 1-.4477 1-1s-.4477-1-1-1-1 .4477-1 1 .4477 1 1 1Z"
            />
        </svg>
    );
}
export default PhoneFill;
