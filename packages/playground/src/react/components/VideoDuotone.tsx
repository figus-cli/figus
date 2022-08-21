import React, { SVGProps } from "react";

export function VideoDuotone(props: SVGProps<SVGSVGElement>) {
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
                d="M12 21c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9ZM9.7367 7.8685l6.4744 3.2372c.7371.3685.7371 1.4203 0 1.7889l-6.4744 3.2372C8.9387 16.5308 8 15.9506 8 15.0585V8.9418c0-.892.9388-1.4723 1.7367-1.0733Z"
                clipRule="evenodd"
                fillOpacity=".24"
                fillRule="evenodd"
            />
            <path
                stroke="currentColor"
                d="M16.2111 11.1056 9.7367 7.8683C8.9387 7.4693 8 8.0496 8 8.9416v6.1168c0 .892.9388 1.4722 1.7367 1.0733l6.4744-3.2373c.7371-.3685.7371-1.4203 0-1.7888Z"
                strokeLinejoin="round"
                strokeWidth="1.2"
            />
            <circle
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                strokeWidth="1.2"
            />
        </svg>
    );
}
export default VideoDuotone;
