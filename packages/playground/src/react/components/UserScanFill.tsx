import React, { SVGProps } from "react";

export function UserScanFill(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="9" r="3" fill="currentColor" />
            <path
                fill="currentColor"
                d="M17.4514 15.9084a.2366.2366 0 0 1-.0671.3041C15.8828 17.3352 14.0191 18 12.0001 18c-2.019 0-3.8828-.6649-5.3843-1.7876a.2366.2366 0 0 1-.0671-.3041C7.4988 14.1915 9.5824 13 12 13c2.4176 0 4.5012 1.1915 5.4514 2.9084Z"
            />
            <path
                stroke="currentColor"
                d="M17 4h.502c1.2114 0 1.817 0 2.2814.232a2.2 2.2 0 0 1 .9846.9846C21 5.681 21 6.2866 21 7.498V8m-4 12h.502c1.2114 0 1.817 0 2.2814-.232a2.2 2.2 0 0 0 .9846-.9846c.232-.4644.232-1.07.232-2.2814V16M7 4h-.502c-1.2114 0-1.817 0-2.2814.232a2.2 2.2 0 0 0-.9846.9846C3 5.681 3 6.2866 3 7.498V8m4 12h-.502c-1.2114 0-1.817 0-2.2814-.232a2.2 2.2 0 0 1-.9846-.9846C3 18.319 3 17.7134 3 16.502V16"
            />
        </svg>
    );
}
export default UserScanFill;
