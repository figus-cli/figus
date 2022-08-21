import React, { SVGProps } from "react";

export function ImgAlt(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle
                cx="18"
                cy="7"
                r="1"
                stroke="currentColor"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M4.0365 17.5h10.927c.6472 0 1.0265-.7285.6554-1.2588l-5.4635-7.805c-.3185-.455-.9923-.455-1.3108 0l-5.4635 7.805c-.3711.5303.0082 1.2588.6554 1.2588Z"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M10.5 17.5h8.5566c.6284 0 1.0114-.6912.6784-1.224l-3.5566-5.6906c-.3133-.5013-1.0435-.5013-1.3568 0l-1.46 2.3361"
                strokeWidth="2"
            />
        </svg>
    );
}
export default ImgAlt;
