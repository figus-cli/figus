import React, { SVGProps } from "react";

export function BatteryFullFill(props: SVGProps<SVGSVGElement>) {
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
                d="M6 9c0-1.8856 0-2.8284.5858-3.4142C7.1716 5 8.1144 5 10 5h4c1.8856 0 2.8284 0 3.4142.5858C18 6.1716 18 7.1144 18 9v10c0 1.8856 0 2.8284-.5858 3.4142C16.8284 23 15.8856 23 14 23h-4c-1.8856 0-2.8284 0-3.4142-.5858C6 21.8284 6 20.8856 6 19V9Zm3-6c0-.9428 0-1.4142.2929-1.7071C9.5858 1 10.0572 1 11 1h2c.9428 0 1.4142 0 1.7071.2929C15 1.5858 15 2.0572 15 3v1H9V3Z"
            />
        </svg>
    );
}
export default BatteryFullFill;
