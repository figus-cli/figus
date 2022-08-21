import React, { SVGProps } from "react";

export function Gamepad(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <rect
                width="2"
                height="2"
                x="13"
                y="14"
                fill="currentColor"
                rx="1"
            />
            <rect
                width="2"
                height="6"
                x="7"
                y="11"
                fill="currentColor"
                rx="1"
            />
            <rect
                width="2"
                height="6"
                x="11"
                y="13"
                fill="currentColor"
                rx="1"
                transform="rotate(90 11 13)"
            />
            <rect
                width="2"
                height="2"
                x="16"
                y="12"
                fill="currentColor"
                rx="1"
            />
            <path
                stroke="currentColor"
                d="M14 8c0-.4167 0-.6251-.0345-.8086a2.0002 2.0002 0 0 0-1.1297-1.4468c-.1696-.078-.3718-.1286-.7761-.2297L12 5.5c-.4612-.1153-.6918-.173-.8829-.267a2 2 0 0 1-1.0722-1.3732C10 3.6515 10 3.4138 10 2.9385V2"
            />
            <path
                stroke="currentColor"
                d="M3 14c0-2.5588 0-3.8382.62-4.7196a3.147 3.147 0 0 1 .5537-.6041C4.9817 8 6.1544 8 8.5 8h7c2.3456 0 3.5184 0 4.3263.6763.208.1741.3942.3772.5538.6041C21 10.1618 21 11.4412 21 14c0 2.5588 0 3.8382-.6199 4.7196a3.1507 3.1507 0 0 1-.5538.6041C19.0184 20 17.8456 20 15.5 20h-7c-2.3456 0-3.5184 0-4.3263-.6763a3.1506 3.1506 0 0 1-.5538-.6041C3 17.8382 3 16.5588 3 14Z"
            />
        </svg>
    );
}
export default Gamepad;
