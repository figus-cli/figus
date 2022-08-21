import React, { SVGProps } from "react";

export function LolLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="12" r="9.5" stroke="currentColor" />
            <circle
                cx="9"
                cy="10"
                r="1"
                fill="currentColor"
                stroke="currentColor"
            />
            <circle
                cx="15"
                cy="10"
                r="1"
                fill="currentColor"
                stroke="currentColor"
            />
            <path
                fill="currentColor"
                d="M8.6289 15c-.2798 0-.4197 0-.4943.1068s-.0314.225.0552.4615C8.7058 16.9788 10.2167 18 12 18c1.7834 0 3.2941-1.0212 3.8102-2.4317.0866-.2365.1299-.3547.0552-.4615C15.7908 15 15.6509 15 15.3711 15H8.6289Z"
            />
        </svg>
    );
}
export default LolLight;
