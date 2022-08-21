import React, { SVGProps } from "react";

export function UnlockDuotone(props: SVGProps<SVGSVGElement>) {
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
                d="M4 12c0-.9428 0-1.4142.2929-1.7071C4.5858 10 5.0572 10 6 10h12c.9428 0 1.4142 0 1.7071.2929C20 10.5858 20 11.0572 20 12v6.0375c0 .381 0 .5716-.0289.7397a1.9998 1.9998 0 0 1-1.1644 1.4913c-.1561.0689-.3409.1151-.7106.2075-1.2372.3093-1.8558.4639-2.4746.5779a20.001 20.001 0 0 1-7.243 0c-.6188-.114-1.2374-.2686-2.4746-.5779-.3697-.0924-.5545-.1386-.7106-.2075a1.9998 1.9998 0 0 1-1.1644-1.4913C4 18.6091 4 18.4185 4 18.0375V12Z"
            />
            <circle cx="12" cy="15" r="2" fill="currentColor" />
            <path stroke="currentColor" d="M12 16v2.5" />
            <path
                stroke="currentColor"
                d="M16.5 10V7c0-2.4853-2.0147-4.5-4.5-4.5S7.5 4.5147 7.5 7v1"
            />
        </svg>
    );
}
export default UnlockDuotone;
