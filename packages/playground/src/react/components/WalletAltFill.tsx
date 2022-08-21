import React, { SVGProps } from "react";

export function WalletAltFill(props: SVGProps<SVGSVGElement>) {
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
                d="M2.8787 3.8787C2 4.7574 2 6.1716 2 9v6c0 2.8284 0 4.2426.8787 5.1213C3.7574 21 5.1716 21 8 21h10c.93 0 1.395 0 1.7765-.1022a3.0002 3.0002 0 0 0 2.1213-2.1213C22 18.395 22 17.93 22 17h-6c-1.6569 0-3-1.3431-3-3s1.3431-3 3-3h6V9c0-2.8284 0-4.2426-.8787-5.1213C20.2426 3 18.8284 3 16 3H8c-2.8284 0-4.2426 0-5.1213.8787ZM7 7c-.5523 0-1 .4477-1 1s.4477 1 1 1h3c.5523 0 1-.4477 1-1s-.4477-1-1-1H7Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
            <path stroke="currentColor" d="M17 14h-1" strokeWidth="2" />
        </svg>
    );
}
export default WalletAltFill;
