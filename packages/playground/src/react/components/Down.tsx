import React, { SVGProps } from "react";

export function Down(props: SVGProps<SVGSVGElement>) {
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
                d="m14 20-.7071.7071.7071.7071.7071-.7071L14 20ZM6 3c-.5523 0-1 .4477-1 1s.4477 1 1 1V3Zm2.2929 12.7071 5 5 1.4142-1.4142-5-5-1.4142 1.4142Zm6.4142 5 5-5-1.4142-1.4142-5 5 1.4142 1.4142ZM15 20V10h-2v10h2ZM8 3H6v2h2V3Zm7 7c0-3.866-3.134-7-7-7v2c2.7614 0 5 2.2386 5 5h2Z"
            />
        </svg>
    );
}
export default Down;
