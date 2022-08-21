import React, { SVGProps } from "react";

export function FlagDuotone(props: SVGProps<SVGSVGElement>) {
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
                d="M16.577 8.5257 6.6581 5.2194c-.3003-.1001-.4505-.1502-.5543-.0754C6 5.219 6 5.3773 6 5.6937V13l10.577-3.5257c.5883-.196.8824-.2941.8824-.4743 0-.1802-.2941-.2782-.8824-.4743Z"
            />
            <path
                stroke="currentColor"
                d="M6 13V5.6937c0-.3165 0-.4748.1038-.5496.1038-.0749.254-.0248.5543.0753l9.9189 3.3063c.5883.196.8824.2941.8824.4743 0 .1802-.2941.2782-.8824.4743L6 13Zm0 0v6"
            />
        </svg>
    );
}
export default FlagDuotone;
