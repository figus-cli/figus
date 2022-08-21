import React, { SVGProps } from "react";

export function StopAndPlayFill(props: SVGProps<SVGSVGElement>) {
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
                d="M11.4265 11.1258 4.5943 7.3301C4.3276 7.1821 4 7.3748 4 7.6798v8.6404c0 .305.3277.4978.5943.3497l6.8322-3.7957c.6858-.381.6858-1.3674 0-1.7484Z"
            />
            <path stroke="currentColor" d="M16 17V7m4 10V7" strokeWidth="2" />
        </svg>
    );
}
export default StopAndPlayFill;
