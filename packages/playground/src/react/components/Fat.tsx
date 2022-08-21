import React, { SVGProps } from "react";

export function Fat(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="12" r="9" stroke="currentColor" />
            <circle cx="12" cy="12" r="3" stroke="currentColor" />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="m15 12 .3903-.4591c.9209-1.0834 2.6888-.3316 2.5473 1.0832-.1476 1.4754 1.7528 2.1947 2.6192.9914L21 13m-12-.5-.016.0851c-.3216 1.7156-2.7704 1.7402-3.1264.0313l-.0354-.17C5.5353 11.0695 3.6978 10.7789 3 12"
            />
            <circle cx="9.5" cy="6.5" r=".5" stroke="currentColor" />
            <circle cx="16.5" cy="8.5" r=".5" stroke="currentColor" />
            <circle cx="13.5" cy="5.5" r=".5" stroke="currentColor" />
        </svg>
    );
}
export default Fat;
