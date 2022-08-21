import React, { SVGProps } from "react";

export function DeskAltDuotone(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <rect
                width="12"
                height="15"
                x="6"
                y="5"
                fill="currentColor"
                fillOpacity=".24"
                rx="2"
            />
            <path stroke="currentColor" d="M9.5 9.5h5m-5 3h5m-5 3h5" />
            <path
                fill="currentColor"
                d="M8 4.8696A.8696.8696 0 0 1 8.8696 4h6.2608A.8696.8696 0 0 1 16 4.8696.1304.1304 0 0 1 15.8696 5H15.5a.5.5 0 0 0-.5.5v.35a.15.15 0 0 1-.15.15h-5.7A.15.15 0 0 1 9 5.85V5.5a.5.5 0 0 0-.5-.5h-.3696A.1304.1304 0 0 1 8 4.8696Z"
            />
        </svg>
    );
}
export default DeskAltDuotone;
