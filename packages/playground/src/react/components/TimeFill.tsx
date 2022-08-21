import React, { SVGProps } from "react";

export function TimeFill(props: SVGProps<SVGSVGElement>) {
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
                d="M12 21c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9Zm1-14.5c0-.5523-.4477-1-1-1s-1 .4477-1 1v5.25c0 .6904.5596 1.25 1.25 1.25h3.25c.5523 0 1-.4477 1-1s-.4477-1-1-1H13V6.5Z"
            />
        </svg>
    );
}
export default TimeFill;
