import React, { SVGProps } from "react";

export function DoneAllRoundDuotoneLine(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                stroke="currentColor"
                d="m8 13 4.2278 3.3821c.4279.3424 1.0516.2765 1.3986-.1476L22.0001 6"
                strokeWidth="1.2"
            />
            <path
                fill="currentColor"
                d="M10.5653 12.3677 15.4644 6.38a.6.6 0 0 0-.9288-.7599l-4.8922 5.9794.9219.7682Zm-2.533 3.096-.922-.7683-.9676 1.1828a.4.4 0 0 1-.5496.0667L2.36 13.52a.6.6 0 0 0-.72.96l3.233 2.4249c.686.5144 1.6555.3967 2.1984-.2669l.9608-1.1743Z"
                clipRule="evenodd"
                fillOpacity=".24"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default DoneAllRoundDuotoneLine;
