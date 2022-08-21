import React, { SVGProps } from "react";

export function AddRoundFill(props: SVGProps<SVGSVGElement>) {
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
                d="M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Zm-9 6c-.5523 0-1-.4477-1-1v-4H7c-.5523 0-1-.4477-1-1s.4477-1 1-1h4V7c0-.5523.4477-1 1-1s1 .4477 1 1v4h4c.5523 0 1 .4477 1 1s-.4477 1-1 1h-4v4c0 .5523-.4477 1-1 1Z"
            />
        </svg>
    );
}
export default AddRoundFill;
