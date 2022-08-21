import React, { SVGProps } from "react";

export function TieLightLight(props: SVGProps<SVGSVGElement>) {
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
                d="M9.5 6.5v-4h5v4m-5 0L8 17.5l4 4 4-4-1.5-11m-5 0h5m-3 6H9"
            />
        </svg>
    );
}
export default TieLightLight;
