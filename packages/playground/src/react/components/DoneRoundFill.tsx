import React, { SVGProps } from "react";

export function DoneRoundFill(props: SVGProps<SVGSVGElement>) {
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
                d="M19.5479 7.2665c.6995-.8549.5735-2.115-.2814-2.8144-.8549-.6994-2.115-.5734-2.8144.2815l-7.786 9.5161L6.2 12.4c-.8837-.6627-2.1373-.4836-2.8.4-.6627.8837-.4836 2.1373.4 2.8l3.233 2.4248c1.2862.9646 3.104.744 4.122-.5002l8.3929-10.258Z"
                strokeWidth="2"
            />
        </svg>
    );
}
export default DoneRoundFill;
