import React, { SVGProps } from "react";

export function DelAlt(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <ellipse cx="12" cy="7" stroke="currentColor" rx="7" ry="3" />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="m5 7 1.9962 10.9792a.0682.0682 0 0 0 .0188.0358c2.7531 2.7531 7.2169 2.7531 9.97 0a.0681.0681 0 0 0 .0188-.0358L19 7"
            />
        </svg>
    );
}
export default DelAlt;
