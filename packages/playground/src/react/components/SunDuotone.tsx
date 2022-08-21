import React, { SVGProps } from "react";

export function SunDuotone(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle
                cx="12"
                cy="12"
                r="3.4"
                fill="currentColor"
                stroke="currentColor"
            />
            <path
                stroke="currentColor"
                d="M12 5V3m0 18v-2m4.9498-11.9497L18.364 5.636M5.636 18.364l1.4143-1.4142M19 12h2M3 12h2m11.9498 4.9497 1.4142 1.4143M5.636 5.636l1.4143 1.4142"
            />
        </svg>
    );
}
export default SunDuotone;
