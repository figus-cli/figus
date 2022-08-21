import React, { SVGProps } from "react";

export function DoneLight(props: SVGProps<SVGSVGElement>) {
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
                d="m5 14 4 3 9-11"
            />
        </svg>
    );
}
export default DoneLight;
