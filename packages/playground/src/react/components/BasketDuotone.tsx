import React, { SVGProps } from "react";

export function BasketDuotone(props: SVGProps<SVGSVGElement>) {
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
                d="M4.413 10.6086C3.69 10.1267 4.0311 9 4.9 9h14.2c.8688 0 1.2099 1.1267.4871 1.6086a1.7564 1.7564 0 0 0-.7402 1.0802l-1.1508 5.1789c-.3337 1.5017-.5006 2.2525-1.049 2.6924C16.0987 20 15.3296 20 13.7913 20h-3.5826c-1.5383 0-2.3074 0-2.8558-.4399s-.7153-1.1907-1.049-2.6924l-1.1508-5.1789a1.7563 1.7563 0 0 0-.7402-1.0802Z"
            />
            <path
                stroke="currentColor"
                d="M12 7V5m3 11.5.5-3m-3.5 3v-3m-3 3-.5-3"
            />
        </svg>
    );
}
export default BasketDuotone;
