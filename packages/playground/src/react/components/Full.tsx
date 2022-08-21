import React, { SVGProps } from "react";

export function Full(props: SVGProps<SVGSVGElement>) {
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
                d="M8 3H6c-1.4142 0-2.1213 0-2.5607.4393C3 3.8787 3 4.5858 3 6v2m5 13H6c-1.4142 0-2.1213 0-2.5607-.4393C3 20.1213 3 19.4142 3 18v-2M16 3h2c1.4142 0 2.1213 0 2.5607.4393C21 3.8787 21 4.5858 21 6v2m-5 13h2c1.4142 0 2.1213 0 2.5607-.4393C21 20.1213 21 19.4142 21 18v-2"
                strokeWidth="2"
            />
        </svg>
    );
}
export default Full;
