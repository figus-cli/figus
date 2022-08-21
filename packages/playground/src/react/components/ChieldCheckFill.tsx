import React, { SVGProps } from "react";

export function ChieldCheckFill(props: SVGProps<SVGSVGElement>) {
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
                d="m18.3939 5.74-5.2121-2.2338a3.0002 3.0002 0 0 0-2.3636 0L5.6061 5.74A1 1 0 0 0 5 6.6592v5.2529a6 6 0 0 0 2.5126 4.8824l3.3249 2.3749a2.0001 2.0001 0 0 0 2.325 0l3.3249-2.3749A6 6 0 0 0 19 11.9121v-5.253a1 1 0 0 0-.6061-.919Zm-2.613 3.8847c.345-.4313.2751-1.0606-.1562-1.4056s-1.0606-.275-1.4056.1562l-3.302 4.1276-1.21-1.21c-.3905-.3905-1.0237-.3905-1.4142 0-.3905.3905-.3905 1.0237 0 1.4142l1.605 1.605c.6321.6322 1.6735.5745 2.2319-.1236l3.6511-4.5638Z"
            />
        </svg>
    );
}
export default ChieldCheckFill;
