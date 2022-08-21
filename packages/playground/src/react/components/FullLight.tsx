import React, { SVGProps } from "react";

export function FullLight(props: SVGProps<SVGSVGElement>) {
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
                d="M9 4H7c-1.4142 0-2.1213 0-2.5607.4393C4 4.8787 4 5.5858 4 7v2m5 11H7c-1.4142 0-2.1213 0-2.5607-.4393C4 19.1213 4 18.4142 4 17v-2M15 4h2c1.4142 0 2.1213 0 2.5607.4393C20 4.8787 20 5.5858 20 7v2m-5 11h2c1.4142 0 2.1213 0 2.5607-.4393C20 19.1213 20 18.4142 20 17v-2"
            />
        </svg>
    );
}
export default FullLight;
