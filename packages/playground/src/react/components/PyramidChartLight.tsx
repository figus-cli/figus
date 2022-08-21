import React, { SVGProps } from "react";

export function PyramidChartLight(props: SVGProps<SVGSVGElement>) {
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
                d="M11.8658 3.2683 3.1085 20.783a.15.15 0 0 0 .1342.217h17.5146a.15.15 0 0 0 .1342-.2171L12.1342 3.2683c-.0553-.1105-.2131-.1105-.2684 0ZM19 17H5m12-4H7m8-4H9"
            />
        </svg>
    );
}
export default PyramidChartLight;
