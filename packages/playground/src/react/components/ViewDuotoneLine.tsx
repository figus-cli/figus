import React, { SVGProps } from "react";

export function ViewDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                stroke="currentColor"
                strokeWidth="1.2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M20.188 10.9343c.3882.4713.5823.7069.5823 1.0657 0 .3588-.1941.5944-.5823 1.0657C18.7679 14.7899 15.6357 18 12 18c-3.6357 0-6.768-3.2101-8.188-4.9343-.3882-.4713-.5823-.7069-.5823-1.0657 0-.3588.1941-.5944.5823-1.0657C5.232 9.2101 8.3643 6 12 6c3.6357 0 6.7679 3.2101 8.188 4.9343Z"
                strokeOpacity=".24"
                strokeWidth="1.2"
            />
        </svg>
    );
}
export default ViewDuotoneLine;
