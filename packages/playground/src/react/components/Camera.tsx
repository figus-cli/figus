import React, { SVGProps } from "react";

export function Camera(props: SVGProps<SVGSVGElement>) {
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
                d="M3 9.8541C3 8.8301 3.8301 8 4.8541 8a1.8541 1.8541 0 0 0 1.6584-1.025l.8208-1.6417c.11-.2199.165-.3298.2273-.4255a2 2 0 0 1 1.4479-.8948C9.1219 4 9.2448 4 9.4907 4h5.0186c.2459 0 .3688 0 .4822.013a2.0001 2.0001 0 0 1 1.4479.8948c.0623.0957.1173.2056.2273.4255l.8208 1.6418A1.8542 1.8542 0 0 0 19.1459 8C20.1699 8 21 8.8301 21 9.8541v5.003c0 2.0048 0 3.0072-.4598 3.739a3.0007 3.0007 0 0 1-.9441.9441C18.8643 20 17.8619 20 15.8571 20H8.1429c-2.0048 0-3.0072 0-3.739-.4598a3.0003 3.0003 0 0 1-.944-.9441C3 17.8643 3 16.8619 3 14.8571v-5.003Z"
            />
            <circle cx="12" cy="13" r="3" stroke="currentColor" />
        </svg>
    );
}
export default Camera;
