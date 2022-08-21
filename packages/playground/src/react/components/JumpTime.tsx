import React, { SVGProps } from "react";

export function JumpTime(props: SVGProps<SVGSVGElement>) {
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
                stroke="currentColor"
                d="m16.3356 6.4618-4.108 9.0375c-.0888.1954-.3664.1954-.4552 0l-4.108-9.0375c-.203-.4467.2918-.8881.7125-.6357l3.4945 2.0967a.2499.2499 0 0 0 .2572 0l3.4945-2.0967c.4208-.2524.9155.189.7125.6357ZM4 18h5m6 0h5"
            />
        </svg>
    );
}
export default JumpTime;
