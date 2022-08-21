import React, { SVGProps } from "react";

export function BoxOpenFill(props: SVGProps<SVGSVGElement>) {
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
                d="M5 11h14v4c0 1.8856 0 2.8284-.5858 3.4142C17.8284 19 16.8856 19 15 19H9c-1.8856 0-2.8284 0-3.4142-.5858C5 17.8284 5 16.8856 5 15v-4ZM2.8153 7.8153 5 10l4-4-2.4113-1.6075a1 1 0 0 0-1.1547.032L2.9224 6.3082c-.4868.3651-.5374 1.0768-.1071 1.5071Zm18.3694 0L19 10l-4-4 2.4113-1.6075a1 1 0 0 1 1.1547.032l2.5116 1.8837c.4868.3651.5374 1.0768.1071 1.5071Z"
            />
            <path stroke="currentColor" d="M18 10v1H6v-1l3-3h6l3 3Z" />
        </svg>
    );
}
export default BoxOpenFill;
