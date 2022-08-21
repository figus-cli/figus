import React, { SVGProps } from "react";

export function MessageOpenDuotone(props: SVGProps<SVGSVGElement>) {
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
                d="M4 11.4721c0-1.2028 0-1.8042.2987-2.2875.2987-.4833.8366-.7523 1.9124-1.2902l4-2c.8779-.4389 1.3168-.6583 1.7889-.6583.4721 0 .911.2194 1.7889.6583l4 2c1.0758.538 1.6137.8069 1.9124 1.2902C20 9.668 20 10.2693 20 11.4721V15c0 1.8856 0 2.8284-.5858 3.4142C18.8284 19 17.8856 19 16 19H8c-1.8856 0-2.8284 0-3.4142-.5858C4 17.8284 4 16.8856 4 15v-3.5279Z"
                fillOpacity=".24"
            />
            <path
                fill="currentColor"
                d="M4 17v-6.7573a.15.15 0 0 1 .217-.1342l6.4414 3.2207a2.9998 2.9998 0 0 0 2.6832 0l6.4413-3.2207a.15.15 0 0 1 .2171.1342V17c0 1.1046-.8954 2-2 2H6c-1.1046 0-2-.8954-2-2Z"
            />
        </svg>
    );
}
export default MessageOpenDuotone;
