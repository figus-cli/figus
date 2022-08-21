import React, { SVGProps } from "react";

export function AddRound(props: SVGProps<SVGSVGElement>) {
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
                d="M12 6v12m6-6H6"
                strokeWidth="2"
            />
        </svg>
    );
}
export default AddRound;
