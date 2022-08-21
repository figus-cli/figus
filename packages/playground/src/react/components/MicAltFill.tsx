import React, { SVGProps } from "react";

export function MicAltFill(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path stroke="currentColor" d="M12 22v-3" />
            <path
                fill="currentColor"
                d="M6.083 8H9c.5523 0 1 .4477 1 1s-.4477 1-1 1H6v2h3c.5523 0 1 .4477 1 1s-.4477 1-1 1H6.083c.476 2.8377 2.944 5 5.917 5s5.441-2.1623 5.917-5H16c-.5523 0-1-.4477-1-1s.4477-1 1-1h2v-2h-2c-.5523 0-1-.4477-1-1s.4477-1 1-1h1.917C17.441 5.1623 14.973 3 12 3S6.559 5.1623 6.083 8Z"
            />
        </svg>
    );
}
export default MicAltFill;
