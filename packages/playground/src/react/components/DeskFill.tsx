import React, { SVGProps } from "react";

export function DeskFill(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path stroke="currentColor" d="M16 3v3M8 3v3" strokeWidth="2" />
            <path
                fill="currentColor"
                d="M14 4h-4v2c0 1.1046-.8954 2-2 2s-2-.8954-2-2V4.0761c-.975.096-1.6314.3127-2.1213.8026C3 5.7574 3 7.1716 3 10v5c0 2.8284 0 4.2426.8787 5.1213C4.7574 21 6.1716 21 9 21h6c2.8284 0 4.2426 0 5.1213-.8787C21 19.2426 21 17.8284 21 15v-5c0-2.8284 0-4.2426-.8787-5.1213-.4899-.49-1.1462-.7067-2.1213-.8026V6c0 1.1046-.8954 2-2 2s-2-.8954-2-2V4Zm-7 8c0-.5523.4477-1 1-1h8c.5523 0 1 .4477 1 1s-.4477 1-1 1H8c-.5523 0-1-.4477-1-1Zm1 3c-.5523 0-1 .4477-1 1s.4477 1 1 1h8c.5523 0 1-.4477 1-1s-.4477-1-1-1H8Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default DeskFill;
