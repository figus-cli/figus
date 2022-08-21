import React, { SVGProps } from "react";

export function CalendarFill(props: SVGProps<SVGSVGElement>) {
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
                d="M2.5858 21.4142C2 20.8284 2 19.8856 2 18v-5c0-.4714 0-.7071.1465-.8536C2.2929 12 2.5286 12 3 12h18c.4714 0 .7071 0 .8536.1464C22 12.2929 22 12.5286 22 13v5c0 1.8856 0 2.8284-.5858 3.4142C20.8284 22 19.8856 22 18 22H6c-1.8856 0-2.8284 0-3.4142-.5858ZM8 16c-.5523 0-1 .4477-1 1s.4477 1 1 1h8c.5523 0 1-.4477 1-1s-.4477-1-1-1H8Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
            <path stroke="currentColor" d="M7 3v3m10-3v3" strokeWidth="2" />
        </svg>
    );
}
export default CalendarFill;
