import React, { SVGProps } from "react";

export function ThumbDown(props: SVGProps<SVGSVGElement>) {
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
                d="M6 4h2.85v2H6V4Zm4 1.15v7.7H8v-7.7h2ZM8.85 14H6v-2h2.85v2ZM4 12V6h2v6H4Zm2 2c-1.1046 0-2-.8954-2-2h2v2Zm4-1.15c0 .6351-.5149 1.15-1.15 1.15v-2a.85.85 0 0 0-.85.85h2ZM8.85 4C9.4851 4 10 4.5149 10 5.15H8a.85.85 0 0 0 .85.85V4ZM6 6H4c0-1.1046.8954-2 2-2v2Z"
            />
            <path
                fill="currentColor"
                d="M8.168 13.5547c-.3064-.4595-.1822-1.0804.2773-1.3868.4595-.3063 1.0804-.1821 1.3868.2774l-1.6642 1.1094ZM14 13c0-.5523.4477-1 1-1s1 .4477 1 1h-2Zm-4.168-.5547 1.8321 2.7481L10 16.3028l-1.832-2.7481 1.664-1.1094ZM12 16.3028V19h-2v-2.6972h2ZM12 19h1v2h-1v-2Zm2-1v-5h2v5h-2Zm-1 1c.5523 0 1-.4477 1-1h2c0 1.6569-1.3431 3-3 3v-2Zm-1 0v2c-1.1046 0-2-.8954-2-2h2Zm-.3359-3.8066A2 2 0 0 1 12 16.3028h-2l1.6641-1.1094Z"
            />
            <path
                stroke="currentColor"
                d="M13 13h4.7655c1.192 0 2.1194-1.0361 1.9877-2.2209l-.5555-5C19.0851 4.7663 18.229 4 17.2099 4h-3.7957a1 1 0 0 0-.7071.2929l-.4142.4142A1 1 0 0 1 11.5858 5H9"
            />
        </svg>
    );
}
export default ThumbDown;
