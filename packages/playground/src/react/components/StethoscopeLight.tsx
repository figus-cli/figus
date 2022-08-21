import React, { SVGProps } from "react";

export function StethoscopeLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="18.5" cy="10.5" r="2" stroke="currentColor" />
            <circle cx="18.5" cy="10.5" r=".5" fill="currentColor" />
            <circle cx="8.5" cy="13.5" r="1.5" fill="currentColor" />
            <path
                stroke="currentColor"
                d="M8.5 13.5c3.5935 0 4.7658-4.8425 4.9669-8.0019C13.502 4.947 13.0523 4.5 12.5 4.5h-1m-3 9c-3.5935 0-4.7658-4.8425-4.967-8.0019C3.498 4.947 3.9478 4.5 4.5 4.5h1"
            />
            <path
                stroke="currentColor"
                d="M18.5 12.5v2c0 2.7614-2.2386 5-5 5s-5-2.2386-5-5v-1"
            />
        </svg>
    );
}
export default StethoscopeLight;
