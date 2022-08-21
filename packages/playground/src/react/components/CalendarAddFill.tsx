import React, { SVGProps } from "react";

export function CalendarAddFill(props: SVGProps<SVGSVGElement>) {
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
                d="M2 9c0-1.8856 0-2.8284.5858-3.4142C3.1716 5 4.1144 5 6 5h12c1.8856 0 2.8284 0 3.4142.5858C22 6.1716 22 7.1144 22 9c0 .4714 0 .7071-.1464.8536C21.7071 10 21.4714 10 21 10H3c-.4714 0-.7071 0-.8535-.1464C2 9.707 2 9.4714 2 9Z"
            />
            <path
                fill="currentColor"
                d="M2 18c0 1.8856 0 2.8284.5858 3.4142C3.1716 22 4.1144 22 6 22h12c1.8856 0 2.8284 0 3.4142-.5858C22 20.8284 22 19.8856 22 18v-5c0-.4714 0-.7071-.1464-.8536C21.7071 12 21.4714 12 21 12H3c-.4714 0-.7071 0-.8535.1464C2 12.2929 2 12.5286 2 13v5Zm6-1c0-.5523.4477-1 1-1h2v-2c0-.5523.4477-1 1-1s1 .4477 1 1v2h2c.5523 0 1 .4477 1 1s-.4477 1-1 1h-2v2c0 .5523-.4477 1-1 1s-1-.4477-1-1v-2H9c-.5523 0-1-.4477-1-1Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
            <path stroke="currentColor" d="M7 3v3m10-3v3" strokeWidth="2" />
        </svg>
    );
}
export default CalendarAddFill;
