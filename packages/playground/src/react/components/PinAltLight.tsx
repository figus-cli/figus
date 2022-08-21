import React, { SVGProps } from "react";

export function PinAltLight(props: SVGProps<SVGSVGElement>) {
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
                d="M19.3612 17c.746.4561 1.1388.9734 1.1388 1.5s-.3928 1.0439-1.1388 1.5c-.746.4561-1.819.8348-3.1112 1.0981-1.2922.2633-2.7579.4019-4.25.4019-1.4921 0-2.9578-.1386-4.25-.4019-1.2922-.2633-2.3652-.642-3.1112-1.0981-.746-.4561-1.1388-.9734-1.1388-1.5s.3927-1.0439 1.1388-1.5"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M19.5 10c0 5.018-5.4883 8.4027-7.0751 9.2764-.2681.1476-.5817.1476-.8498 0C9.9883 18.4027 4.5 15.018 4.5 10c0-4.5 3.634-7.5 7.5-7.5 4 0 7.5 3 7.5 7.5Z"
            />
            <circle cx="12" cy="10" r="3.5" stroke="currentColor" />
        </svg>
    );
}
export default PinAltLight;
