import React, { SVGProps } from "react";

export function LoadListFill(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path stroke="currentColor" d="M3 4h18" />
            <path
                fill="currentColor"
                d="M19 4H5v11.8c0 1.1201 0 1.6802.218 2.108.1917.3763.4977.6823.874.874C6.5198 19 7.08 19 8.2 19h7.6c1.1201 0 1.6802 0 2.108-.218a1.9996 1.9996 0 0 0 .874-.874C19 17.4802 19 16.9201 19 15.8V4Zm-8 11v-3.5858l-1.2929 1.2929c-.3905.3905-1.0237.3905-1.4142 0-.3905-.3905-.3905-1.0237 0-1.4142l2.8939-2.894a1.168 1.168 0 0 1 .0568-.053A.9975.9975 0 0 1 12 8c.3022 0 .5731.134.7564.3459a1.168 1.168 0 0 1 .0568.053l2.8939 2.894c.3905.3905.3905 1.0237 0 1.4142-.3905.3905-1.0237.3905-1.4142 0L13 11.4142V15c0 .5523-.4477 1-1 1s-1-.4477-1-1Z"
            />
        </svg>
    );
}
export default LoadListFill;
