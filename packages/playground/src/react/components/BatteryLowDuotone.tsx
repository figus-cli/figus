import React, { SVGProps } from "react";

export function BatteryLowDuotone(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <rect
                width="10"
                height="15"
                x="7"
                y="6"
                fill="currentColor"
                fillOpacity=".24"
                rx="1.5"
            />
            <rect
                width="8"
                height="5"
                x="8"
                y="15"
                fill="currentColor"
                rx="1"
            />
            <rect
                width="6"
                height="2"
                x="9"
                y="3"
                fill="currentColor"
                fillOpacity=".24"
                rx="1"
            />
        </svg>
    );
}
export default BatteryLowDuotone;
