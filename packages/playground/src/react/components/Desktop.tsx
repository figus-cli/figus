import React, { SVGProps } from "react";

export function Desktop(props: SVGProps<SVGSVGElement>) {
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
                d="M4 8c0-.971.0021-1.5988.0643-2.0613.0583-.4337.1525-.5697.2286-.6458.0761-.0761.212-.1703.6458-.2286C5.4012 5.0021 6.0289 5 7 5h10c.9711 0 1.5988.0021 2.0613.0643.4337.0583.5697.1525.6458.2286.0761.0761.1703.212.2286.6458C19.9979 6.4012 20 7.0289 20 8v8H4V8Zm-.3333 8C2.7462 16 2 16.7462 2 17.6667 2 18.9553 3.0447 20 4.3333 20h15.3334C20.9553 20 22 18.9553 22 17.6667 22 16.7462 21.2538 16 20.3333 16H3.6667Z"
            />
        </svg>
    );
}
export default Desktop;
