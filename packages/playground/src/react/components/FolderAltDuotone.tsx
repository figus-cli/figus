import React, { SVGProps } from "react";

export function FolderAltDuotone(props: SVGProps<SVGSVGElement>) {
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
                d="M8 7H3v12c0 1.1046.8954 2 2 2h14c1.1046 0 2-.8954 2-2v-9l-1 1h-9L8 7Z"
                fillOpacity=".24"
            />
            <path
                stroke="currentColor"
                d="M3 7.8c0-1.6802 0-2.5202.327-3.162a3 3 0 0 1 1.311-1.311C5.2798 3 6.1198 3 7.8 3h8.4c1.6802 0 2.5202 0 3.162.327a2.9997 2.9997 0 0 1 1.311 1.311C21 5.2798 21 6.1198 21 7.8v8.4c0 1.6802 0 2.5202-.327 3.162a2.9994 2.9994 0 0 1-1.311 1.311C18.7202 21 17.8802 21 16.2 21H7.8c-1.6802 0-2.5202 0-3.162-.327a2.9997 2.9997 0 0 1-1.311-1.311C3 18.7202 3 17.8802 3 16.2V7.8Z"
                strokeWidth="1.2"
            />
            <path
                stroke="currentColor"
                d="M3 7h3c.9814 0 1.4721 0 1.8944.2111.4223.2112.7168.6038 1.3056 1.3889l.6.8c.5889.7851.8833 1.1777 1.3056 1.3889C11.5279 11 12.0186 11 13 11h5c.9319 0 1.3978 0 1.7654-.1522.49-.203.8794-.5924 1.0824-1.0824C21 9.3978 21 8.9319 21 8"
                strokeWidth="1.2"
            />
            <path stroke="currentColor" d="M7 16h8" strokeWidth="1.2" />
        </svg>
    );
}
export default FolderAltDuotone;
