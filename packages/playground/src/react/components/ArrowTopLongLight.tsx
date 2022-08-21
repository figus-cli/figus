import React, { SVGProps } from "react";

export function ArrowTopLongLight(props: SVGProps<SVGSVGElement>) {
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
                d="M11.5 7a.5.5 0 0 1 1 0h-1Zm1 14a.5.5 0 0 1-1 0h1Zm0-14v14h-1V7h1Z"
            />
            <path
                fill="currentColor"
                d="M11.7856 2.3573 9.727 5.7884C9.407 6.3216 9.791 7 10.413 7h3.174c.6219 0 1.006-.6784.686-1.2116l-2.0586-3.4311c-.0971-.1618-.3317-.1618-.4288 0Z"
            />
        </svg>
    );
}
export default ArrowTopLongLight;
