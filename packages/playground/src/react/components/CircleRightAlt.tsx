import React, { SVGProps } from "react";

export function CircleRightAlt(props: SVGProps<SVGSVGElement>) {
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
                d="m14 15 .7071-.7071.7071.7071-.7071.7071L14 15Zm-3.2929-4.7071 4 4-1.4142 1.4142-4-4 1.4142-1.4142Zm4 5.4142-4 4-1.4142-1.4142 4-4 1.4142 1.4142Z"
            />
            <path
                stroke="currentColor"
                d="M9.6706 6.1533C7.5616 6.436 5.7298 7.0922 4.5168 8c-1.2131.9078-1.7248 2.0051-1.4398 3.0875.285 1.0824 1.3473 2.076 2.9889 2.7959C7.7075 14.6031 9.8165 15 12 15m7.7942-2.25c.591-.5118.9745-1.0767 1.1288-1.6626.1543-.5859.0762-1.1813-.2297-1.752-.3059-.5709-.8336-1.106-1.5531-1.5748-.7195-.4689-1.6166-.8622-2.6402-1.1577"
            />
        </svg>
    );
}
export default CircleRightAlt;
