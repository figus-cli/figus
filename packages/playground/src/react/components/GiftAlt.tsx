import React, { SVGProps } from "react";

export function GiftAlt(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <rect
                width="18"
                height="3"
                x="2"
                y="10"
                stroke="currentColor"
                rx="1.5"
            />
            <path
                stroke="currentColor"
                d="M5 13v6.4c0 .5601 0 .8401.109 1.054a1 1 0 0 0 .437.437C5.76 21 6.04 21 6.6 21h8.8c.5601 0 .8401 0 1.054-.109a.9998.9998 0 0 0 .437-.437C17 20.2401 17 19.9601 17 19.4V13"
            />
            <path
                fill="currentColor"
                d="M12 10v1h1v-1h-1Zm1 0V6.5h-2V10h2Zm-4.5 1H12V9H8.5v2ZM4 6.5C4 8.9853 6.0147 11 8.5 11V9C7.1193 9 6 7.8807 6 6.5H4ZM8.5 2C6.0147 2 4 4.0147 4 6.5h2C6 5.1193 7.1193 4 8.5 4V2ZM13 6.5C13 4.0147 10.9853 2 8.5 2v2C9.8807 4 11 5.1193 11 6.5h2Z"
            />
            <path
                fill="currentColor"
                d="M12 10v1h-1v-1h1Zm-1 0V7.5h2V10h-2Zm3.5 1H12V9h2.5v2ZM18 7.5c0 1.933-1.567 3.5-3.5 3.5V9c.8284 0 1.5-.6716 1.5-1.5h2ZM14.5 4C16.433 4 18 5.567 18 7.5h-2c0-.8284-.6716-1.5-1.5-1.5V4ZM11 7.5C11 5.567 12.567 4 14.5 4v2c-.8284 0-1.5.6716-1.5 1.5h-2Z"
            />
            <path stroke="currentColor" d="M12 13v8" />
        </svg>
    );
}
export default GiftAlt;
