import React, { SVGProps } from "react";

export function ColumUpLight(props: SVGProps<SVGSVGElement>) {
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
                d="M21 20H3m7-4v-6c0-1.1046-.8954-2-2-2s-2 .8954-2 2v6m12 0V6c0-1.1046-.8954-2-2-2s-2 .8954-2 2v10"
            />
        </svg>
    );
}
export default ColumUpLight;
