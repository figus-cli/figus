import React, { SVGProps } from "react";

export function Chield(props: SVGProps<SVGSVGElement>) {
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
                d="m18.712 4.7886-5.9242-2.539a1.9998 1.9998 0 0 0-1.5756 0L5.288 4.7887a2 2 0 0 0-1.2 2.0592l.6514 5.8621a6.9997 6.9997 0 0 0 2.4759 4.6045l3.5043 2.9203a2 2 0 0 0 2.5608 0l3.5043-2.9203a6.9998 6.9998 0 0 0 2.4759-4.6045l.6514-5.8621a2 2 0 0 0-1.2-2.0592Z"
            />
        </svg>
    );
}
export default Chield;
