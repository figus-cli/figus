import React, { SVGProps } from "react";

export function ChatDuotone(props: SVGProps<SVGSVGElement>) {
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
                d="M4 12c0-4.4183 3.5817-8 8-8s8 3.5817 8 8v6.6667c0 .31 0 .465-.0341.5921a.9997.9997 0 0 1-.7071.7071C19.1317 20 18.9767 20 18.6667 20H12c-4.4183 0-8-3.5817-8-8Z"
                fillOpacity=".24"
            />
            <path
                stroke="currentColor"
                d="M8.5 10.5h7m-7 3h5"
                strokeLinejoin="round"
            />
        </svg>
    );
}
export default ChatDuotone;
