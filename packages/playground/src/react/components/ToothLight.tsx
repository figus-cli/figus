import React, { SVGProps } from "react";

export function ToothLight(props: SVGProps<SVGSVGElement>) {
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
                d="M12 17.5c1.5 0 2.5 3 3.5 3 2 0 5-8.5 5-12.5 0-1.9187-1.5-3.5-3.5-3.5s-3.5 2-5 2-3-2-5-2S3.5 6 3.5 8c0 4 3 12.5 5 12.5 1 0 2-3 3.5-3Z"
            />
        </svg>
    );
}
export default ToothLight;
