import React, { SVGProps } from "react";

export function RoadAltDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                d="m8.5739 20.3523 3.3814-6.7629a.05.05 0 0 1 .0894 0l3.3814 6.7629c.0222.0442-.0265.0903-.0695.0658l-3.3318-1.9039a.0499.0499 0 0 0-.0496 0l-3.3318 1.9039c-.043.0245-.0917-.0216-.0695-.0658Z"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="m20.5 18.5-4-15m-13 15 4-15m4.5 7v-2m0-3v-2"
                strokeOpacity=".24"
            />
        </svg>
    );
}
export default RoadAltDuotoneLine;
