import React, { SVGProps } from "react";

export function MessageOpenDuotoneLine(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                stroke="currentColor"
                d="M4 10.4721c0-1.2028 0-1.8042.2987-2.2875.2987-.4833.8366-.7523 1.9124-1.2902l4-2c.8779-.4389 1.3168-.6583 1.7889-.6583.4721 0 .911.2194 1.7889.6583l4 2c1.0758.538 1.6137.8069 1.9124 1.2902C20 8.668 20 9.2693 20 10.4721V16c0 1.8856 0 2.8284-.5858 3.4142C18.8284 20 17.8856 20 16 20H8c-1.8856 0-2.8284 0-3.4142-.5858C4 18.8284 4 17.8856 4 16v-5.5279Z"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M6.4142 13.4142 4 11v7c0 1.1046.8954 2 2 2h12c1.1046 0 2-.8954 2-2v-7l-2.4142 2.4142A2 2 0 0 1 16.1716 14H7.8284a2 2 0 0 1-1.4142-.5858Z"
            />
        </svg>
    );
}
export default MessageOpenDuotoneLine;
