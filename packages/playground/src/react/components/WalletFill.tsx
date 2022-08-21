import React, { SVGProps } from "react";

export function WalletFill(props: SVGProps<SVGSVGElement>) {
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
                d="M20 5c.5523 0 1-.4477 1-1s-.4477-1-1-1v2ZM5.5 5H20V3H5.5v2Zm0 5h8V8h-8v2ZM4 6.5C4 5.6716 4.6716 5 5.5 5V3C3.567 3 2 4.567 2 6.5h2Zm-2 0C2 8.433 3.567 10 5.5 10V8C4.6716 8 4 7.3284 4 6.5H2Z"
            />
            <path stroke="currentColor" d="M3 12V6.5" strokeWidth="2" />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M3 8.5h-.5v10.5329c0 .4433 0 .8252.041 1.131.0441.3278.1435.6419.3983.8968.2549.2548.569.3542.8968.3982.3058.0411.6877.0411 1.131.0411h14.0658c.4433 0 .8252 0 1.131-.0411.3278-.044.6419-.1434.8968-.3982.2548-.2549.3542-.569.3982-.8968.0411-.3058.0411-.6877.0411-1.131V17.5H18c-1.3807 0-2.5-1.1193-2.5-2.5s1.1193-2.5 2.5-2.5h3.5v-1.5329c0-.4433 0-.8252-.0411-1.131-.044-.3277-.1434-.642-.3982-.8968-.2549-.2548-.569-.3542-.8968-.3982-.3058-.0412-.6877-.0411-1.131-.0411H3Z"
            />
        </svg>
    );
}
export default WalletFill;
