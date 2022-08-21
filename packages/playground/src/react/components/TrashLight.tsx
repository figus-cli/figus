import React, { SVGProps } from "react";

export function TrashLight(props: SVGProps<SVGSVGElement>) {
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
                d="M9.5 14.5v-3m5 3v-3M3 6.5h18c-1.4045 0-2.1067 0-2.6111.337a1.9996 1.9996 0 0 0-.5518.5519C17.5 7.8933 17.5 8.5955 17.5 10v5.5c0 1.8856 0 2.8284-.5858 3.4142-.5858.5858-1.5286.5858-3.4142.5858h-3c-1.8856 0-2.8284 0-3.4142-.5858C6.5 18.3284 6.5 17.3856 6.5 15.5V10c0-1.4045 0-2.1067-.337-2.6111a2.0001 2.0001 0 0 0-.5519-.5518C5.1067 6.5 4.4045 6.5 3 6.5Zm6.5-2.9998S10 2.5 12 2.5s2.5 1 2.5 1"
            />
        </svg>
    );
}
export default TrashLight;
