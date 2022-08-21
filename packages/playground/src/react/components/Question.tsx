import React, { SVGProps } from "react";

export function Question(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="12" r="9" stroke="currentColor" />
            <circle
                cx="12"
                cy="18"
                r=".5"
                fill="currentColor"
                stroke="currentColor"
            />
            <path
                stroke="currentColor"
                d="M12 16v-1.4189c0-.9442.6042-1.7825 1.5-2.0811a2.1937 2.1937 0 0 0 1.5-2.0811v-.5132C15 8.3009 13.6991 7 12.0943 7H12c-1.6569 0-3 1.3431-3 3"
            />
        </svg>
    );
}
export default Question;
