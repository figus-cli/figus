import React, { SVGProps } from "react";

export function RoadLight(props: SVGProps<SVGSVGElement>) {
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
                d="m8.5739 19.3523 3.3814-6.7629a.05.05 0 0 1 .0894 0l3.3814 6.7629c.0222.0442-.0265.0903-.0695.0658l-3.3318-1.9039a.0499.0499 0 0 0-.0496 0l-3.3318 1.9039c-.043.0245-.0917-.0216-.0695-.0658Z"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M16 16.5h2.3c1.1201 0 1.6802 0 2.108-.218a1.9996 1.9996 0 0 0 .874-.874c.218-.4278.218-.9879.218-2.108V7.7c0-1.1201 0-1.6802-.218-2.108a1.9997 1.9997 0 0 0-.874-.874C19.9802 4.5 19.4201 4.5 18.3 4.5H5.7c-1.1201 0-1.6802 0-2.108.218a1.9999 1.9999 0 0 0-.874.874C2.5 6.0198 2.5 6.58 2.5 7.7v5.6c0 1.1201 0 1.6802.218 2.108.1917.3763.4977.6823.874.874.4278.218.9879.218 2.108.218H8m-2.5 0 2-12m11 12-2-12m-4.5 5v-3"
            />
        </svg>
    );
}
export default RoadLight;
