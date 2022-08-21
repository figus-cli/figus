import React, { SVGProps } from "react";

export function MessageDuotone(props: SVGProps<SVGSVGElement>) {
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
                d="M4 16v-5.7573a.15.15 0 0 1 .217-.1342l6.4414 3.2207a2.9998 2.9998 0 0 0 2.6832 0l6.4413-3.2207a.15.15 0 0 1 .2171.1342V16c0 1.1046-.8954 2-2 2H6c-1.1046 0-2-.8954-2-2Z"
            />
            <path
                fill="currentColor"
                d="M4 8v.9073a.15.15 0 0 0 .083.1342l6.5754 3.2877a2.9998 2.9998 0 0 0 2.6832 0l6.5755-3.2877A.15.15 0 0 0 20 8.9073V8c0-1.1046-.8954-2-2-2H6c-1.1046 0-2 .8954-2 2Z"
            />
        </svg>
    );
}
export default MessageDuotone;
