import React, { SVGProps } from "react";

export function Pen(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <rect
                width="16"
                height="4"
                x="4"
                y="16"
                stroke="currentColor"
                rx="2"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M4.9095 11.3642 8 16h8l3.0905-4.6358c.4354-.653.6531-.9795.6178-1.3353-.0352-.3558-.3127-.6333-.8677-1.1883L12 2 5.1594 8.8406c-.555.555-.8325.8325-.8677 1.1883-.0353.3558.1824.6823.6178 1.3353Z"
                strokeWidth="2"
            />
            <circle
                cx="12"
                cy="11"
                r="2"
                stroke="currentColor"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M12 2v7"
                strokeWidth="2"
            />
        </svg>
    );
}
export default Pen;
