import React, { SVGProps } from "react";

export function DeskDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                d="M4 7.8098c0-.7537 0-1.1305.1003-1.4352a2 2 0 0 1 1.2743-1.2743C5.6793 5 6.0561 5 6.8098 5c.3242 0 .4863 0 .6238.0402a1 1 0 0 1 .6198.525c.0623.129.089.289.1423.6088L8.25 6.5c.1053.6316.1579.9474.348 1.1624a1 1 0 0 0 .219.1855C9.0601 8 9.3803 8 10.0206 8h3.9586c.6403 0 .9605 0 1.2038-.1521a1.0012 1.0012 0 0 0 .219-.1855c.19-.215.2426-.5308.3479-1.1624l.0543-.326c.0533-.3198.08-.4797.1423-.6087a1 1 0 0 1 .6198-.525C16.7039 5 16.866 5 17.1902 5c.7537 0 1.1305 0 1.4352.1003a2 2 0 0 1 1.2743 1.2743C20 6.6793 20 7.0561 20 7.8098V17c0 1.8856 0 2.8284-.5858 3.4142C18.8284 21 17.8856 21 16 21H8c-1.8856 0-2.8284 0-3.4142-.5858C4 19.8284 4 18.8856 4 17V7.8099Z"
                fillOpacity=".24"
            />
            <rect
                width="16"
                height="16"
                x="4"
                y="5"
                stroke="currentColor"
                rx="2"
                strokeWidth="1.2"
            />
            <path
                stroke="currentColor"
                d="M16 2v4c0 .9428 0 1.4142-.2929 1.7071C15.4142 8 14.9428 8 14 8h-4c-.9428 0-1.4142 0-1.7071-.2929C8 7.4142 8 6.9428 8 6V2m1 12h6"
                strokeWidth="1.2"
            />
        </svg>
    );
}
export default DeskDuotoneLine;
