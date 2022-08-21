import React, { SVGProps } from "react";

export function Humidity(props: SVGProps<SVGSVGElement>) {
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
                d="M20 14.5714C20 18.7526 16.3364 22 12 22c-4.3364 0-8-3.2474-8-7.4286C4 12 5.3047 9.4524 6.7164 7.4234c1.4304-2.0557 3.0754-3.726 3.9613-4.568M20 14.5714l-9.3223-11.716M20 14.5714c0-2.5714-1.3047-5.119-2.7164-7.148-1.4304-2.0557-3.0754-3.726-3.9613-4.568a1.9127 1.9127 0 0 0-2.6446 0M20 14.5714l-9.3223-11.716"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M12 18a4.0001 4.0001 0 0 1-4-4"
            />
        </svg>
    );
}
export default Humidity;
