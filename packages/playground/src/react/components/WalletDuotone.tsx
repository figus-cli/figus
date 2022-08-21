import React, { SVGProps } from "react";

export function WalletDuotone(props: SVGProps<SVGSVGElement>) {
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
                d="M3 6c0-1.1046.8954-2 2-2h14.5a.5.5 0 0 1 .5.5V6c0 1.1046-.8954 2-2 2H5c-1.1046 0-2-.8954-2-2Z"
            />
            <path
                fill="currentColor"
                d="M3 16V6c0 1.1046.8954 2 2 2h14c1.1046 0 2 .8954 2 2v2.85a.15.15 0 0 1-.15.15H18c-1.1046 0-2 .8954-2 2s.8954 2 2 2h2.85a.15.15 0 0 1 .15.15V18c0 1.1046-.8954 2-2 2H7c-2.2091 0-4-1.7909-4-4Z"
                fillOpacity=".24"
            />
            <path
                fill="currentColor"
                d="M15 15c0-1.1046.8954-2 2-2h3.85a.15.15 0 0 1 .15.15v3.7a.15.15 0 0 1-.15.15H17c-1.1046 0-2-.8954-2-2Z"
            />
            <rect
                width="6"
                height="1"
                x="5"
                y="10"
                fill="currentColor"
                rx=".5"
            />
        </svg>
    );
}
export default WalletDuotone;
