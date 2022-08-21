import React, { SVGProps } from "react";

export function ClockFill(props: SVGProps<SVGSVGElement>) {
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
                d="M5.9647 3.1363a4 4 0 0 0-2.8284 2.8284m14.899-2.8284a4 4 0 0 1 2.8284 2.8284"
            />
            <path
                fill="currentColor"
                d="M12 20c4.4183 0 8-3.5817 8-8s-3.5817-8-8-8-8 3.5817-8 8 3.5817 8 8 8Zm1-12c0-.5523-.4477-1-1-1s-1 .4477-1 1v3.75c0 .6904.5596 1.25 1.25 1.25H15c.5523 0 1-.4477 1-1s-.4477-1-1-1h-2V8Z"
            />
        </svg>
    );
}
export default ClockFill;
