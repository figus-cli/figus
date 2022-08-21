import React, { SVGProps } from "react";

export function WorldDuotone(props: SVGProps<SVGSVGElement>) {
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
                r="8"
                fill="currentColor"
                stroke="currentColor"
                fillOpacity=".24"
                strokeWidth="1.2"
            />
            <path
                stroke="currentColor"
                d="M18.572 6.4213c-.7237.782-1.6851 1.4236-2.8048 1.8718-1.1197.4483-2.3655.6903-3.6346.706-1.269.0159-2.5248-.195-3.6637-.6152-1.1389-.4202-2.1281-1.0375-2.886-1.801M18.572 17.5787c-.7237-.782-1.6851-1.4236-2.8048-1.8718-1.1197-.4483-2.3655-.6903-3.6346-.7061-1.269-.0158-2.5248.1951-3.6637.6153-1.1389.4202-2.1281 1.0375-2.886 1.8011M12 4v16m8-8H4"
                strokeWidth="1.2"
            />
        </svg>
    );
}
export default WorldDuotone;
