import React, { SVGProps } from "react";

export function CameraDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                d="M4.8541 8C3.8301 8 3 8.8301 3 9.8541v5.003c0 2.0048 0 3.0072.4598 3.739.2398.3816.5625.7043.9441.9441C5.1357 20 6.1381 20 8.1429 20h7.7142c2.0048 0 3.0072 0 3.739-.4598a3.0007 3.0007 0 0 0 .9441-.9441C21 17.8643 21 16.8619 21 14.8571v-5.003C21 8.8301 20.1699 8 19.1459 8a1.8542 1.8542 0 0 1-1.6584-1.025l-.8208-1.6417h-.0001c-.1099-.2199-.1649-.3299-.2272-.4255a2.0001 2.0001 0 0 0-1.4479-.8948C14.8781 4 14.7552 4 14.5093 4H9.4907c-.2459 0-.3688 0-.4822.013a2 2 0 0 0-1.4479.8948c-.0623.0957-.1173.2056-.2273.4255l-.8208 1.6418A1.8541 1.8541 0 0 1 4.854 8ZM12 17c2.2091 0 4-1.7909 4-4 0-2.2091-1.7909-4-4-4-2.2091 0-4 1.7909-4 4 0 2.2091 1.7909 4 4 4Z"
                clipRule="evenodd"
                fillOpacity=".24"
                fillRule="evenodd"
            />
            <path
                stroke="currentColor"
                d="M3 9.8541C3 8.8301 3.8301 8 4.8541 8a1.8541 1.8541 0 0 0 1.6584-1.025l.8208-1.6417c.11-.2199.165-.3298.2273-.4255a2 2 0 0 1 1.4479-.8948C9.1219 4 9.2448 4 9.4907 4h5.0186c.2459 0 .3688 0 .4822.013a2.0001 2.0001 0 0 1 1.4479.8948c.0623.0957.1173.2056.2273.4255l.8208 1.6418A1.8542 1.8542 0 0 0 19.1459 8C20.1699 8 21 8.8301 21 9.8541v5.003c0 2.0048 0 3.0072-.4598 3.739a3.0007 3.0007 0 0 1-.9441.9441C18.8643 20 17.8619 20 15.8571 20H8.1429c-2.0048 0-3.0072 0-3.739-.4598a3.0003 3.0003 0 0 1-.944-.9441C3 17.8643 3 16.8619 3 14.8571v-5.003Z"
                strokeWidth="1.2"
            />
            <circle
                cx="12"
                cy="13"
                r="3.4"
                stroke="currentColor"
                strokeWidth="1.2"
            />
        </svg>
    );
}
export default CameraDuotoneLine;
