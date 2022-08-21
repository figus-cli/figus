import React, { SVGProps } from "react";

export function CameraDuotone(props: SVGProps<SVGSVGElement>) {
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
                d="M4 12c0-1.8856 0-2.8284.5858-3.4142C5.1716 8 6.1144 8 8 8h.7838c.1043 0 .1565 0 .1958-.0283s.0558-.0778.0888-.1768l.4757-1.4274c.22-.66.33-.99.5919-1.1787C10.3979 5 10.7458 5 11.4415 5h3.117c.6957 0 1.0436 0 1.3055.1888.2618.1887.3718.5187.5918 1.1787l.4955 1.4865c.0139.0416.0208.0623.0318.079a.1503.1503 0 0 0 .0858.0618c.0193.0052.0412.0052.085.0052.7876 0 1.1815 0 1.4985.1094a2 2 0 0 1 1.2382 1.2382c.1094.317.1094.7109.1094 1.4985V14c0 1.8856 0 2.8284-.5858 3.4142C18.8284 18 17.8856 18 16 18H8c-1.8856 0-2.8284 0-3.4142-.5858C4 16.8284 4 15.8856 4 14v-2Z"
            />
            <path stroke="currentColor" d="M14.5 6.5h-3" />
            <circle cx="13" cy="13" r="3" fill="currentColor" />
            <rect
                width="3"
                height="1"
                x="4"
                y="6"
                fill="currentColor"
                rx=".5"
            />
        </svg>
    );
}
export default CameraDuotone;
