import React, { SVGProps } from "react";

export function InfoDuotone(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="12" r="9" fill="currentColor" />
            <path
                fill="currentColor"
                d="M13 7c0 .5523-.4477 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1Z"
            />
            <path
                stroke="currentColor"
                d="M12 16.5v-5c0-.465 0-.6975-.0511-.8882a1.4999 1.4999 0 0 0-1.0607-1.0607C10.6975 9.5 10.465 9.5 10 9.5m2 7h1.5m-1.5 0h-1.5"
            />
        </svg>
    );
}
export default InfoDuotone;
