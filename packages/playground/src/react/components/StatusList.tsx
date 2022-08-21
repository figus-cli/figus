import React, { SVGProps } from "react";

export function StatusList(props: SVGProps<SVGSVGElement>) {
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
                d="M15.4013 7.5H19a.5.5 0 0 0 0-1h-3.9585a2.981 2.981 0 0 0 .3598 1Zm-2.1724 0a4.9732 4.9732 0 0 1-.2042-1H5a.5.5 0 0 0 0 1h8.2289ZM5 11.5a.5.5 0 0 0 0 1h14a.5.5 0 0 0 0-1H5Zm0 5a.5.5 0 0 0 0 1h14a.5.5 0 0 0 0-1H5Z"
            />
            <circle cx="18" cy="6" r="3" fill="currentColor" />
        </svg>
    );
}
export default StatusList;
