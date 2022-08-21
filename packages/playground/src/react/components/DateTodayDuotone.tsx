import React, { SVGProps } from "react";

export function DateTodayDuotone(props: SVGProps<SVGSVGElement>) {
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
                d="M7 4.0183c-.5395.0228-.928.074-1.2712.189a4 4 0 0 0-2.5214 2.5215C3 7.3475 3 8.114 3 9.6471c0 .0958 0 .1437.013.1823a.25.25 0 0 0 .1576.1576c.0386.013.0865.013.1823.013h17.2942c.0958 0 .1437 0 .1823-.013a.2498.2498 0 0 0 .1576-.1576C21 9.7908 21 9.743 21 9.6471c0-1.533 0-2.2996-.2074-2.9183a4 4 0 0 0-2.5214-2.5214c-.3431-.115-.7317-.1663-1.2712-.189V6.5c0 .8284-.6716 1.5-1.5 1.5S14 7.3284 14 6.5V4h-4v2.5C10 7.3284 9.3284 8 8.5 8S7 7.3284 7 6.5V4.0183Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
            <path
                fill="currentColor"
                d="M3 11.5c0-.2357 0-.3536.0732-.4268C3.1465 11 3.2643 11 3.5 11h17c.2357 0 .3536 0 .4268.0732.0732.0732.0732.1911.0732.4268v.5c0 3.7712 0 5.6569-1.1716 6.8284C18.6569 20 16.7712 20 13 20h-2c-3.7712 0-5.6569 0-6.8284-1.1716C3 17.6569 3 15.7712 3 12v-.5Z"
                fillOpacity=".24"
            />
            <path stroke="currentColor" d="M8.5 2.5v4m7-4v4" />
        </svg>
    );
}
export default DateTodayDuotone;
