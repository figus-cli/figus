import React, { SVGProps } from "react";

export function Eye(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                stroke="currentColor"
                d="M12 5c-5.4442 0-8.469 4.2342-9.5445 6.1164-.2206.3861-.331.5792-.3188.8672.0122.288.1419.4762.4013.8526C3.8182 14.6935 7.2939 19 12 19s8.1818-4.3065 9.462-6.1638c.2594-.3764.3891-.5646.4013-.8526.0121-.288-.0982-.4811-.3188-.8672C20.4689 9.2342 17.4442 5 12 5Z"
                strokeWidth="2"
            />
            <circle cx="12" cy="12" r="4" fill="currentColor" />
        </svg>
    );
}
export default Eye;
