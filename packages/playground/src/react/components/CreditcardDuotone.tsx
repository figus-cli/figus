import React, { SVGProps } from "react";

export function CreditcardDuotone(props: SVGProps<SVGSVGElement>) {
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
                d="M3 10c0-1.8856 0-2.8284.5858-3.4142C4.1716 6 5.1144 6 7 6h10c1.8856 0 2.8284 0 3.4142.5858C21 7.1716 21 8.1144 21 10v4c0 1.8856 0 2.8284-.5858 3.4142C19.8284 18 18.8856 18 17 18H7c-1.8856 0-2.8284 0-3.4142-.5858C3 16.8284 3 15.8856 3 14v-4Z"
            />
            <circle cx="6" cy="15" r="1" fill="currentColor" />
            <path fill="currentColor" d="M3 9h18v2H3z" />
        </svg>
    );
}
export default CreditcardDuotone;
