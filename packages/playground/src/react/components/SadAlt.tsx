import React, { SVGProps } from "react";

export function SadAlt(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
            />
            <path
                stroke="currentColor"
                d="M7.8812 16.2441c.4927-.4267 1.1419-.735 1.8415-.9369C10.43 15.103 11.2142 15 12 15c.7858 0 1.5699.103 2.2774.3072.6995.2019 1.3487.5102 1.8414.9369"
                strokeWidth="2"
            />
            <mask
                id="a"
                width="4"
                height="3"
                x="7"
                y="8"
                fill="currentColor"
                maskUnits="userSpaceOnUse"
            >
                <path fill="currentColor" d="M7 8h4v3H7z" />
                <path d="M9.5 9c.2403 0 .3604 0 .433.1225.0727.1224.03.2006-.0554.357a.9998.9998 0 0 1-1.5847.2276 1.0002 1.0002 0 0 1-.1705-.2277c-.0854-.1563-.1281-.2345-.0555-.357C8.1396 9 8.2597 9 8.5 9h1Z" />
            </mask>
            <path
                fill="currentColor"
                d="M9.5 9c.2403 0 .3604 0 .433.1225.0727.1224.03.2006-.0554.357a.9998.9998 0 0 1-1.5847.2276 1.0002 1.0002 0 0 1-.1705-.2277c-.0854-.1563-.1281-.2345-.0555-.357C8.1396 9 8.2597 9 8.5 9h1Z"
            />
            <path
                stroke="currentColor"
                d="M9.5 9c.2403 0 .3604 0 .433.1225.0727.1224.03.2006-.0554.357a.9998.9998 0 0 1-1.5847.2276 1.0002 1.0002 0 0 1-.1705-.2277c-.0854-.1563-.1281-.2345-.0555-.357C8.1396 9 8.2597 9 8.5 9h1Z"
                mask="url(#a)"
            />
            <mask
                id="b"
                width="4"
                height="3"
                x="13"
                y="8"
                fill="currentColor"
                maskUnits="userSpaceOnUse"
            >
                <path fill="currentColor" d="M13 8h4v3h-4z" />
                <path d="M15.5 9c.2403 0 .3604 0 .4331.1225.0726.1224.0299.2006-.0555.357a1.0002 1.0002 0 0 1-1.7552 0c-.0854-.1564-.1281-.2346-.0555-.357C14.1396 9 14.2597 9 14.5 9h1Z" />
            </mask>
            <path
                fill="currentColor"
                d="M15.5 9c.2403 0 .3604 0 .4331.1225.0726.1224.0299.2006-.0555.357a1.0002 1.0002 0 0 1-1.7552 0c-.0854-.1564-.1281-.2346-.0555-.357C14.1396 9 14.2597 9 14.5 9h1Z"
            />
            <path
                stroke="currentColor"
                d="M15.5 9c.2403 0 .3604 0 .4331.1225.0726.1224.0299.2006-.0555.357a1.0002 1.0002 0 0 1-1.7552 0c-.0854-.1564-.1281-.2346-.0555-.357C14.1396 9 14.2597 9 14.5 9h1Z"
                mask="url(#b)"
            />
        </svg>
    );
}
export default SadAlt;
