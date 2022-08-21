import React, { SVGProps } from "react";

export function FlashLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                stroke="currentColor"
                d="M19.5 17.5h-15m2.5 0 1.347-7.1843A1 1 0 0 1 9.33 9.5h5.34a.9999.9999 0 0 1 .9828.8157L17 17.5m4.5-8h-3"
            />
            <path
                fill="currentColor"
                d="M12.5 2.5a.5.5 0 0 0-1 0h1Zm-1 2.9992a.5.5 0 0 0 1 0h-1Zm0-2.9992v2.9992h1V2.5h-1Zm7.3536 2.3536a.5001.5001 0 0 0-.7072-.7072l.7072.7072Zm-2.7072 1.2928a.5001.5001 0 0 0 .7072.7072l-.7072-.7072Zm2-2-2 2 .7072.7072 2-2-.7072-.7072Zm-13 .7072a.5.5 0 1 1 .7072-.7072l-.7072.7072Zm2.7072 1.2928a.5.5 0 1 1-.7072.7072l.7072-.7072Zm-2-2 2 2-.7072.7072-2-2 .7072-.7072Z"
            />
            <path stroke="currentColor" d="M5.5 9.5h-3m10 2h1" />
        </svg>
    );
}
export default FlashLight;
