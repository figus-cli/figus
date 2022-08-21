import React, { SVGProps } from "react";

export function BatteryLowFill(props: SVGProps<SVGSVGElement>) {
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
                d="M6.5858 5.5858C6 6.1716 6 7.1144 6 9v10c0 1.8856 0 2.8284.5858 3.4142C7.1716 23 8.1144 23 10 23h4c1.8856 0 2.8284 0 3.4142-.5858C18 21.8284 18 20.8856 18 19V9c0-1.8856 0-2.8284-.5858-3.4142C16.8284 5 15.8856 5 14 5h-4c-1.8856 0-2.8284 0-3.4142.5858Zm1.6485 2.6485C8 8.4686 8 8.8458 8 9.6v5.8c0 .7542 0 1.1314.2343 1.3657C8.4686 17 8.8458 17 9.6 17h4.8c.7542 0 1.1314 0 1.3657-.2343C16 16.5314 16 16.1542 16 15.4V9.6c0-.7542 0-1.1314-.2343-1.3657C15.5314 8 15.1542 8 14.4 8H9.6c-.7542 0-1.1314 0-1.3657.2343Zm1.0586-6.9414C9 1.5858 9 2.0572 9 3h6c0-.9428 0-1.4142-.2929-1.7071C14.4142 1 13.9428 1 13 1h-2c-.9428 0-1.4142 0-1.7071.2929Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default BatteryLowFill;
