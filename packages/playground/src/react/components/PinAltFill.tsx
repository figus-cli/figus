import React, { SVGProps } from "react";

export function PinAltFill(props: SVGProps<SVGSVGElement>) {
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
                d="M12.398 17.804C13.881 17.0348 19 14.0163 19 9c0-3.866-3.134-7-7-7S5 5.134 5 9c0 5.0163 5.119 8.0348 6.602 8.804a.8547.8547 0 0 0 .796 0ZM12 12c1.6569 0 3-1.3431 3-3s-1.3431-3-3-3-3 1.3431-3 3 1.3431 3 3 3Z"
            />
            <path
                stroke="currentColor"
                d="M18.0622 16.5c.6144.4561.9378.9734.9378 1.5s-.3234 1.0439-.9378 1.5c-.6144.4561-1.4981.8348-2.5622 1.0981-1.0641.2633-2.2712.4019-3.5.4019-1.2288 0-2.4359-.1386-3.5-.4019-1.0641-.2633-1.9478-.642-2.5622-1.0981C5.3234 19.0439 5 18.5266 5 18s.3234-1.0439.9378-1.5"
            />
        </svg>
    );
}
export default PinAltFill;
