import React, { SVGProps } from "react";

export function KeyDuotone(props: SVGProps<SVGSVGElement>) {
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
                d="M18.8964 10H8v4h6.7324a.5.5 0 0 0 .416-.2226l.4356-.6534c.1979-.2968.6341-.2968.832 0l.376.564c.0989.1484.3171.1484.416 0l.376-.564c.1979-.2968.6341-.2968.832 0l.4148.6223a.2501.2501 0 0 0 .3848.0381l1.6076-1.6076a.25.25 0 0 0 0-.3536l-1.75-1.75A.2498.2498 0 0 0 18.8964 10Z"
            />
            <rect
                width="6"
                height="1"
                x="10"
                y="11"
                fill="currentColor"
                rx=".5"
            />
            <path
                fill="currentColor"
                d="M3.5858 8.5858C3 9.1716 3 10.1144 3 12c0 1.8856 0 2.8284.5858 3.4142C4.1716 16 5.1144 16 7 16c1.8856 0 2.8284 0 3.4142-.5858C11 14.8284 11 13.8856 11 12c0-1.8856 0-2.8284-.5858-3.4142C9.8284 8 8.8856 8 7 8c-1.8856 0-2.8284 0-3.4142.5858ZM6 10c-.5523 0-1 .4477-1 1s.4477 1 1 1 1-.4477 1-1-.4477-1-1-1Z"
            />
        </svg>
    );
}
export default KeyDuotone;
