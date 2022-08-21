import React, { SVGProps } from "react";

export function GiftLightDuotone(props: SVGProps<SVGSVGElement>) {
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
                d="M5 8h14v8c0 1.8856 0 2.8284-.5858 3.4142C17.8284 20 16.8856 20 15 20H9c-1.8856 0-2.8284 0-3.4142-.5858C5 18.8284 5 17.8856 5 16V8Z"
            />
            <path
                stroke="currentColor"
                d="m12 8-.2392-2.153C11.6123 4.511 10.4672 3.5 9.1228 3.5 7.6838 3.5 6.5 4.6665 6.5 6.1056c0 .8711.4354 1.6847 1.1602 2.1679L9.5 9.5M12 8l.2392-2.153c.1485-1.3361 1.2936-2.347 2.638-2.347 1.439 0 2.6228 1.1665 2.6228 2.6056a2.6055 2.6055 0 0 1-1.1603 2.1679L14.5 9.5"
            />
            <rect
                width="16"
                height="3"
                x="4"
                y="8"
                fill="currentColor"
                rx="1"
            />
            <path stroke="currentColor" d="M12 11v4" />
        </svg>
    );
}
export default GiftLightDuotone;
