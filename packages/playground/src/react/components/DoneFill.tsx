import React, { SVGProps } from "react";

export function DoneFill(props: SVGProps<SVGSVGElement>) {
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
                d="m19.5479 7.2665.6333-.774-.774-.6332-1.5479-1.2664-.774-.6333-.6332.774-7.786 9.5161L6.2 12.4001l-.8-.6-.6.8-1.2 1.6-.6.8.8.6 4.767 3.5751.7668.5752.607-.7419 9.6071-11.742Z"
                strokeWidth="2"
            />
        </svg>
    );
}
export default DoneFill;
