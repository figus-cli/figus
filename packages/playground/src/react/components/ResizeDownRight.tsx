import React, { SVGProps } from "react";

export function ResizeDownRight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path fill="currentColor" stroke="currentColor" d="M10 20h10V10" />
            <path fill="currentColor" stroke="currentColor" d="M12 17h5v-5" />
        </svg>
    );
}
export default ResizeDownRight;
