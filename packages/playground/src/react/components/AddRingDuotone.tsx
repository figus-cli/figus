import React, { SVGProps } from "react";

export function AddRingDuotone(props: SVGProps<SVGSVGElement>) {
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
                r="9"
                fill="currentColor"
                fillOpacity=".24"
            />
            <path stroke="currentColor" d="M12 15V9m3 3H9" strokeWidth="1.2" />
        </svg>
    );
}
export default AddRingDuotone;
