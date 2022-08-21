import React, { SVGProps } from "react";

export function AlarmclockDuotone(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="13" r="8" fill="currentColor" />
            <path
                stroke="currentColor"
                d="m5.5 4.5-2 2m15-2 2 2M12 8v4.9243c0 .0494.0146.0976.042.1387L14 16"
            />
        </svg>
    );
}
export default AlarmclockDuotone;
