import React, { SVGProps } from "react";

export function TimeDuotone(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="12" r="8" fill="currentColor" />
            <path stroke="currentColor" d="M12 7v4.75a.25.25 0 0 0 .25.25H15" />
        </svg>
    );
}
export default TimeDuotone;
