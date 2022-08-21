import React, { SVGProps } from "react";

export function AddRingFill(props: SVGProps<SVGSVGElement>) {
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
                d="M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Zm-8 1v4h-2v-4H7v-2h4V7h2v4h4v2h-4Z"
            />
        </svg>
    );
}
export default AddRingFill;
