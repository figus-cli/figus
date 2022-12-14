import React, { SVGProps } from "react";

export function LightningRingDuotone(props: SVGProps<SVGSVGElement>) {
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
                d="M12 21c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9Zm-1.5633-7.2H11.5c.2357 0 .3536 0 .4268.0732.0732.0732.0732.1911.0732.4268v2.8079c0 .759 0 1.1386.1861 1.1877.1862.0492.3736-.2808.7486-.9407l2.3676-4.1669c.7553-1.3293 1.1329-1.994.8437-2.491-.2893-.497-1.0537-.497-2.5827-.497H12.5c-.2357 0-.3536 0-.4268-.0732C12 10.0536 12 9.9357 12 9.7V6.8921c0-.759 0-1.1386-.1861-1.1877-.1862-.0492-.3736.2808-.7486.9407L8.6977 10.812c-.7553 1.3293-1.133 1.994-.8437 2.491.2893.497 1.0537.497 2.5827.497Z"
                clipRule="evenodd"
                fillOpacity=".24"
                fillRule="evenodd"
            />
            <path
                stroke="currentColor"
                d="M11.5 13.8h-1.0633c-1.529 0-2.2934 0-2.5827-.497-.2892-.497.0884-1.1617.8437-2.491l2.3676-4.1669c.375-.66.5624-.99.7486-.9407C12 5.7535 12 6.133 12 6.892V9.7c0 .2357 0 .3536.0732.4268.0732.0732.1911.0732.4268.0732h1.0633c1.529 0 2.2934 0 2.5827.497.2892.497-.0884 1.1617-.8437 2.491l-2.3676 4.1669c-.375.6599-.5624.9899-.7486.9407C12 18.2465 12 17.8669 12 17.1079V14.3c0-.2357 0-.3536-.0732-.4268-.0732-.0732-.1911-.0732-.4268-.0732Z"
                strokeWidth="1.2"
            />
            <circle
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                strokeWidth="1.2"
            />
        </svg>
    );
}
export default LightningRingDuotone;
