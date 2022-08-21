import React, { SVGProps } from "react";

export function UnlockLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                stroke="currentColor"
                d="M4 13.0002c0-1.8856 0-2.8284.5858-3.4142.5858-.5858 1.5286-.5858 3.4142-.5858h8c1.8856 0 2.8284 0 3.4142.5858C20 10.1718 20 11.1146 20 13.0002v2c0 2.8285 0 4.2427-.8787 5.1214-.8787.8786-2.2929.8786-5.1213.8786h-4c-2.8284 0-4.2426 0-5.1213-.8786C4 19.2429 4 17.8287 4 15.0002v-2Z"
            />
            <path
                stroke="currentColor"
                d="m16.4999 9 .0776-.6205a5.519 5.519 0 0 0-2.4087-5.2724c-2.0665-1.3817-4.8015-1.2114-6.6806.416l-.8183.7086"
            />
            <circle cx="12" cy="15" r="2" fill="currentColor" />
        </svg>
    );
}
export default UnlockLight;
