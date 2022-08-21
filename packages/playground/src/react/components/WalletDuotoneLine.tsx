import React, { SVGProps } from "react";

export function WalletDuotoneLine(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path fill="currentColor" d="M15 13h6v4h-6z" />
            <path
                fill="currentColor"
                d="M20 7V4H5.5C4.1193 4 3 5.1193 3 6.5S4.1193 9 5.5 9H18l2-2Z"
            />
            <path
                stroke="currentColor"
                d="M3 6.5C3 5.1193 4.1193 4 5.5 4h13.7857c.1995 0 .2993 0 .3794.028a.4997.4997 0 0 1 .3068.3069C20 4.415 20 4.5148 20 4.7143c0 1.197 0 1.7954-.1683 2.2765a3.0002 3.0002 0 0 1-1.8409 1.8408C17.5097 9 16.9112 9 15.7143 9H15M3 6.5C3 7.8807 4.1193 9 5.5 9H19c.9428 0 1.4142 0 1.7071.2929C21 9.5858 21 10.0572 21 11v2M3 6.5V17c0 1.8856 0 2.8284.5858 3.4142C4.1716 21 5.1144 21 7 21h12c.9428 0 1.4142 0 1.7071-.2929C21 20.4142 21 19.9428 21 19v-2m0 0h-4c-.9428 0-1.4142 0-1.7071-.2929C15 16.4142 15 15.9428 15 15c0-.9428 0-1.4142.2929-1.7071C15.5858 13 16.0572 13 17 13h4m0 4v-4"
            />
        </svg>
    );
}
export default WalletDuotoneLine;
