import React, { SVGProps } from "react";

export function ArrowDropUp(props: SVGProps<SVGSVGElement>) {
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
                d="m12.2048 7.2926 5.9141 8.4486C18.49 16.2715 18.1107 17 17.4635 17H6.5365c-.6472 0-1.0265-.7285-.6554-1.2588l5.9141-8.4486a.25.25 0 0 1 .4096 0Z"
            />
        </svg>
    );
}
export default ArrowDropUp;
