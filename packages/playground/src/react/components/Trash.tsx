import React, { SVGProps } from "react";

export function Trash(props: SVGProps<SVGSVGElement>) {
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
                d="M21.0001 6h-18v3c1.1045 0 2 .8954 2 2v4c0 2.8284 0 4.2426.8786 5.1213C6.7574 21 8.1717 21 11.0001 21h2c2.8284 0 4.2426 0 5.1213-.8787.8787-.8787.8787-2.2929.8787-5.1213v-4c0-1.1046.8954-2 2-2V6Zm-10.5 5c0-.5523-.4478-1-1-1-.5523 0-1 .4477-1 1v5c0 .5523.4477 1 1 1 .5522 0 1-.4477 1-1v-5Zm5 0c0-.5523-.4478-1-1-1-.5523 0-1 .4477-1 1v5c0 .5523.4477 1 1 1 .5522 0 1-.4477 1-1v-5Z"
            />
            <path
                stroke="currentColor"
                d="M10.0681 3.3706c.114-.1063.3651-.2003.7144-.2673C11.1318 3.0363 11.5597 3 12 3s.8682.0363 1.2175.1033c.3493.067.6004.161.7144.2673"
            />
        </svg>
    );
}
export default Trash;
