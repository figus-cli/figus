import React, { SVGProps } from "react";

export function SaveLight(props: SVGProps<SVGSVGElement>) {
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
                d="M16 21v-2c0-1.8856 0-2.8284-.5858-3.4142C14.8284 15 13.8856 15 12 15h-1c-1.8856 0-2.8284 0-3.4142.5858C7 16.1716 7 17.1144 7 19v2"
            />
            <path fill="currentColor" stroke="currentColor" d="M7 8h5" />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M3 9c0-2.8284 0-4.2426.8787-5.1213C4.7574 3 6.1716 3 9 3h7.1716c.4087 0 .6131 0 .7969.0761.1837.0761.3283.2207.6173.5097l2.8284 2.8284c.289.289.4336.4336.5097.6173.0761.1838.0761.3882.0761.797V15c0 2.8284 0 4.2426-.8787 5.1213C19.2426 21 17.8284 21 15 21H9c-2.8284 0-4.2426 0-5.1213-.8787C3 19.2426 3 17.8284 3 15V9Z"
            />
        </svg>
    );
}
export default SaveLight;
