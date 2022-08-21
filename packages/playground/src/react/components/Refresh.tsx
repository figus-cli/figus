import React, { SVGProps } from "react";

export function Refresh(props: SVGProps<SVGSVGElement>) {
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
                d="m10 19-.7071-.7071L8.5858 19l.707.7071L10 19Zm3.2929-4.7071-4 4 1.4142 1.4142 4-4-1.4142-1.4142Zm-4 5.4142 4 4 1.4142-1.4142-4-4-1.4142 1.4142Z"
            />
            <path stroke="currentColor" d="M5.9378 15.5A7 7 0 1 1 12 19" />
        </svg>
    );
}
export default Refresh;
