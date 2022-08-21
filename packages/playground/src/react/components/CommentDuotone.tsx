import React, { SVGProps } from "react";

export function CommentDuotone(props: SVGProps<SVGSVGElement>) {
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
                d="M5.1716 6.1716C4 7.343 4 9.2288 4 13v5.5858c0 .8909 1.0771 1.3371 1.7071.7071l2.1465-2.1465c.0722-.0722.1083-.1083.1543-.1274.046-.019.097-.019.1992-.019H14c1.8638 0 2.7956 0 3.5307-.3045a4.0003 4.0003 0 0 0 2.1648-2.1648C20 13.7956 20 12.8638 20 11s0-2.7957-.3045-3.5307a4.0001 4.0001 0 0 0-2.1648-2.1648C16.7956 5 15.8638 5 14 5h-2C8.2288 5 6.3431 5 5.1716 6.1716Z"
            />
            <path stroke="currentColor" d="M8.5 9.5h7m-7 3h5" />
        </svg>
    );
}
export default CommentDuotone;
