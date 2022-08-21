import React, { SVGProps } from "react";

export function FileDockAddFill(props: SVGProps<SVGSVGElement>) {
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
                d="M12 2c1.4992 0 2.7004 0 3.6773.0736A2.4925 2.4925 0 0 0 15.5 3v.5H15c-1.3807 0-2.5 1.1193-2.5 2.5s1.1193 2.5 2.5 2.5h.5V9c0 1.3807 1.1193 2.5 2.5 2.5.8178 0 1.5439-.3927 2-.9998V14c0 3.7712 0 5.6569-1.1716 6.8284C17.6569 22 15.7712 22 12 22c-3.7712 0-5.6569 0-6.8284-1.1716C4 19.6569 4 17.7712 4 14v-4c0-3.7712 0-5.6569 1.1716-6.8284C6.343 2 8.2288 2 12 2Zm-4 9c-.5523 0-1 .4477-1 1s.4477 1 1 1h4c.5523 0 1-.4477 1-1s-.4477-1-1-1H8Zm0 3c-.5523 0-1 .4477-1 1s.4477 1 1 1h6c.5523 0 1-.4477 1-1s-.4477-1-1-1H8Zm0 3c-.5523 0-1 .4477-1 1s.4477 1 1 1h4c.5523 0 1-.4477 1-1s-.4477-1-1-1H8Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
            <path stroke="currentColor" d="M18 3v6m3-3h-6" strokeWidth="2" />
        </svg>
    );
}
export default FileDockAddFill;
