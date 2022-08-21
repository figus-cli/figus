import React, { SVGProps } from "react";

export function MessageAltFill(props: SVGProps<SVGSVGElement>) {
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
                d="M3.0132 9.1513C3 9.6903 3 10.302 3 11v2c0 2.8284 0 4.2426.8787 5.1213C4.7574 19 6.1716 19 9 19h6c2.8284 0 4.2426 0 5.1213-.8787C21 17.2426 21 15.8284 21 13v-2c0-.6979 0-1.3098-.0132-1.8487l-8.0155 4.4531a2.0005 2.0005 0 0 1-1.9426 0L3.0132 9.1513Zm.2298-2.1216c.0828.0208.1644.0527.2426.0961L12 11.856l8.5144-4.7302a1.0014 1.0014 0 0 1 .2426-.096c-.1299-.4736-.3294-.8449-.6357-1.1511C19.2426 5 17.8284 5 15 5H9c-2.8284 0-4.2426 0-5.1213.8787-.3062.3062-.5058.6775-.6357 1.151Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default MessageAltFill;
