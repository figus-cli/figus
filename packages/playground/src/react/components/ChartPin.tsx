import React, { SVGProps } from "react";

export function ChartPin(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path stroke="currentColor" d="m15.5 10.5-3 3-2-2-3 3" />
            <path
                stroke="currentColor"
                d="M14 5H7.2c-1.1201 0-1.6802 0-2.108.218a1.9999 1.9999 0 0 0-.874.874C4 6.5198 4 7.08 4 8.2v8.6c0 1.1201 0 1.6802.218 2.108.1917.3763.4977.6823.874.874C5.5198 20 6.08 20 7.2 20h8.6c1.1201 0 1.6802 0 2.108-.218a1.9996 1.9996 0 0 0 .874-.874C19 18.4802 19 17.9201 19 16.8V10"
            />
            <circle cx="19" cy="5" r="2" fill="currentColor" />
        </svg>
    );
}
export default ChartPin;
