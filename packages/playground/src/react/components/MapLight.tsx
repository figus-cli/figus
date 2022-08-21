import React, { SVGProps } from "react";

export function MapLight(props: SVGProps<SVGSVGElement>) {
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
                d="M2.5 5.7c0-1.1201 0-1.6802.218-2.108a1.9999 1.9999 0 0 1 .874-.874C4.0198 2.5 4.58 2.5 5.7 2.5h12.6c1.1201 0 1.6802 0 2.108.218.3763.1917.6823.4977.874.874.218.4278.218.9879.218 2.108v12.6c0 1.1201 0 1.6802-.218 2.108a1.9996 1.9996 0 0 1-.874.874c-.4278.218-.9879.218-2.108.218H5.7c-1.1201 0-1.6802 0-2.108-.218a1.9997 1.9997 0 0 1-.874-.874C2.5 19.9802 2.5 19.4201 2.5 18.3V5.7Z"
            />
            <path
                stroke="currentColor"
                d="M12.5 15.0294c0 2.1584-2.1397 3.6746-3.0731 4.2334a.8268.8268 0 0 1-.8538 0C7.6397 18.704 5.5 17.1878 5.5 15.0294 5.5 12.9118 7.1959 11.5 9 11.5c1.8667 0 3.5 1.4118 3.5 3.5294Z"
            />
            <path stroke="currentColor" d="m18.5 21.5-6-15m9-2-19 4" />
            <circle cx="9" cy="15" r="1" fill="currentColor" />
        </svg>
    );
}
export default MapLight;
