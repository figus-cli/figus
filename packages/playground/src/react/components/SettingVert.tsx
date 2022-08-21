import React, { SVGProps } from "react";

export function SettingVert(props: SVGProps<SVGSVGElement>) {
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
                d="M11.5 8.5v-4m-5 10v4m10-2.0002V18.5m-5 0v-6m-5-8v6m10-6v8m-7-4h4m-9 6h4m6 2h4"
            />
        </svg>
    );
}
export default SettingVert;
