import React, { SVGProps } from "react";

export function FoldersLine(props: SVGProps<SVGSVGElement>) {
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
                stroke="currentColor"
                d="M7 2v2.8c0 1.1201 0 1.6802.218 2.108.1917.3763.4977.6823.874.874C8.5198 8 9.08 8 10.2 8H15"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M7 5v9.8c0 1.1201 0 1.6802.218 2.108.1917.3763.4977.6823.874.874C8.5198 18 9.08 18 10.2 18H15"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M15 16.6c0-.5601 0-.8401.109-1.054a.9998.9998 0 0 1 .437-.437C15.7599 15 16.0399 15 16.6 15h.4l1 1h1.4c.5601 0 .8401 0 1.054.109a.9998.9998 0 0 1 .437.437c.109.2139.109.4939.109 1.054v1.8c0 .5601 0 .8401-.109 1.054a.9998.9998 0 0 1-.437.437C20.2401 21 19.9601 21 19.4 21h-2.8c-.5601 0-.8401 0-1.054-.109a.9998.9998 0 0 1-.437-.437C15 20.2401 15 19.9601 15 19.4v-2.8Zm0-10c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C15.7599 5 16.0399 5 16.6 5h.4l1 1h1.4c.5601 0 .8401 0 1.054.109a1 1 0 0 1 .437.437C21 6.76 21 7.04 21 7.6v1.8c0 .56 0 .8401-.109 1.054a.9998.9998 0 0 1-.437.437C20.2401 11 19.9601 11 19.4 11h-2.8c-.5601 0-.8401 0-1.054-.109a.9998.9998 0 0 1-.437-.437C15 10.2401 15 9.96 15 9.4V6.6Z"
                strokeLinejoin="round"
                strokeWidth="2"
            />
        </svg>
    );
}
export default FoldersLine;
