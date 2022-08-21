import React, { SVGProps } from "react";

export function Add(props: SVGProps<SVGSVGElement>) {
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
                d="M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Zm-10 6v-5H6v-2h5V6h2v5h5v2h-5v5h-2Z"
            />
        </svg>
    );
}
export default Add;
