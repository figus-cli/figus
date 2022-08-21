import React, { SVGProps } from "react";

export function BlankAltDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                d="M12 16.3333V21h1l6-6v-1h-4.6667c-1.0999 0-1.6499 0-1.9916.3417C12 14.6834 12 15.2334 12 16.3333Z"
            />
            <path
                stroke="currentColor"
                d="M12.1716 21H9c-1.8856 0-2.8284 0-3.4142-.5858C5 19.8284 5 18.8856 5 17V7c0-1.8856 0-2.8284.5858-3.4142C6.1716 3 7.1144 3 9 3h6c1.8856 0 2.8284 0 3.4142.5858C19 4.1716 19 5.1144 19 7v7.1716c0 .4087 0 .6131-.0761.7969-.0761.1837-.2207.3283-.5097.6173l-4.8284 4.8284c-.289.289-.4336.4336-.6173.5097-.1838.0761-.3882.0761-.7969.0761Z"
            />
            <path
                stroke="currentColor"
                d="M12 21v-4.6667c0-1.0999 0-1.6499.3417-1.9916C12.6834 14 13.2334 14 14.3333 14H19"
            />
        </svg>
    );
}
export default BlankAltDuotoneLine;
