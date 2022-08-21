import React, { SVGProps } from "react";

export function LightningRingLight(props: SVGProps<SVGSVGElement>) {
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
                d="M11.5 13.8h-1.0633c-1.529 0-2.2934 0-2.5827-.497-.2892-.497.0884-1.1617.8437-2.491l2.3676-4.1669c.375-.66.5624-.99.7486-.9407C12 5.7535 12 6.133 12 6.892V9.7c0 .2357 0 .3536.0732.4268.0732.0732.1911.0732.4268.0732h1.0633c1.529 0 2.2934 0 2.5827.497.2892.497-.0884 1.1617-.8437 2.491l-2.3676 4.1669c-.375.6599-.5624.9899-.7486.9407C12 18.2465 12 17.8669 12 17.1079V14.3c0-.2357 0-.3536-.0732-.4268-.0732-.0732-.1911-.0732-.4268-.0732Z"
            />
            <circle cx="12" cy="12" r="9" stroke="currentColor" />
        </svg>
    );
}
export default LightningRingLight;
