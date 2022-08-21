import React, { SVGProps } from "react";

export function AlarmclockFill(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path stroke="currentColor" d="M5 4 3 6m16-2 2 2" />
            <path
                fill="currentColor"
                d="M12 20c4.4183 0 8-3.5817 8-8s-3.5817-8-8-8-8 3.5817-8 8 3.5817 8 8 8Zm2.7809-9.8753c.345-.4313.2751-1.0606-.1562-1.4056s-1.0606-.275-1.4056.1562l-1.4272 1.7841-2.2372-1.4915c-.4595-.3063-1.0804-.1821-1.3868.2774-.3063.4595-.1821 1.0804.2774 1.3868l2.8093 1.8728a1.25 1.25 0 0 0 1.6695-.2592l1.8568-2.321Z"
            />
        </svg>
    );
}
export default AlarmclockFill;
