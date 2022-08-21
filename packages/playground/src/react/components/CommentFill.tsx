import React, { SVGProps } from "react";

export function CommentFill(props: SVGProps<SVGSVGElement>) {
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
                d="M3 10.4c0-2.2402 0-3.3603.436-4.216a4 4 0 0 1 1.748-1.748C6.0397 4 7.1598 4 9.4 4h5.2c2.2402 0 3.3603 0 4.216.436a4.0002 4.0002 0 0 1 1.748 1.748C21 7.0397 21 8.1598 21 10.4v1.2c0 2.2402 0 3.3603-.436 4.216a4.0003 4.0003 0 0 1-1.748 1.748C17.9603 18 16.8402 18 14.6 18H7.4142a.9997.9997 0 0 0-.707.2929l-2 2c-.63.63-1.7072.1838-1.7072-.7071V10.4ZM9 8c-.5523 0-1 .4477-1 1s.4477 1 1 1h6c.5523 0 1-.4477 1-1s-.4477-1-1-1H9Zm0 4c-.5523 0-1 .4477-1 1s.4477 1 1 1h3c.5523 0 1-.4477 1-1s-.4477-1-1-1H9Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default CommentFill;
