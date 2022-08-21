import React, { SVGProps } from "react";

export function Covert(props: SVGProps<SVGSVGElement>) {
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
                d="M6 3h12c.5523 0 1 .4477 1 1v16c0 .5523-.4477 1-1 1H6c-.5523 0-1-.4477-1-1V4c0-.5523.4477-1 1-1Z"
            />
            <path
                fill="currentColor"
                d="M15.3002 7.6247 14.5194 7l.7808.6247Zm2.9189-5.2494L14.5194 7l1.5617 1.2494 3.6998-4.6247-1.5618-1.2494ZM14.5194 7H9.4806v2h5.0388V7ZM9.4806 7 5.781 2.3753 4.219 3.6247l3.7 4.6247L9.4806 7Zm0 0L7.919 8.2494A2 2 0 0 0 9.4806 9V7Zm5.0388 0v2a2 2 0 0 0 1.5617-.7506L14.5194 7Zm.7808 9.3753L14.5194 17l.7808-.6247Zm2.9189 5.2494L14.5194 17l1.5617-1.2494 3.6998 4.6247-1.5618 1.2494ZM14.5194 17H9.4806v-2h5.0388v2Zm-5.0388 0L5.781 21.6247l-1.562-1.2494 3.6998-4.6247L9.4806 17Zm0 0L7.919 15.7506A2 2 0 0 1 9.4806 15v2Zm5.0388 0v-2a2 2 0 0 1 1.5617.7506L14.5194 17Z"
            />
            <path stroke="currentColor" d="M12 13v3" />
        </svg>
    );
}
export default Covert;
