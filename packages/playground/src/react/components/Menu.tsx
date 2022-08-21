import React, { SVGProps } from "react";

export function Menu(props: SVGProps<SVGSVGElement>) {
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
                d="M5 7h14M5 12h14M5 17h14"
            />
        </svg>
    );
}
export default Menu;
