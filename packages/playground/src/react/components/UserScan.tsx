import React, { SVGProps } from "react";

export function UserScan(props: SVGProps<SVGSVGElement>) {
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
                d="M17 4h.502c1.2114 0 1.817 0 2.2814.232a2.2 2.2 0 0 1 .9846.9846C21 5.681 21 6.2866 21 7.498V8m-4 12h.502c1.2114 0 1.817 0 2.2814-.232a2.2 2.2 0 0 0 .9846-.9846c.232-.4644.232-1.07.232-2.2814V16M7 4h-.502c-1.2114 0-1.817 0-2.2814.232a2.2 2.2 0 0 0-.9846.9846C3 5.681 3 6.2866 3 7.498V8m4 12h-.502c-1.2114 0-1.817 0-2.2814-.232a2.2 2.2 0 0 1-.9846-.9846C3 18.319 3 17.7134 3 16.502V16m4.6258 1.0695c.4189-.6046 1.0365-1.1274 1.8078-1.4985C10.2049 15.1999 11.0906 15 12 15c.9094 0 1.7951.1999 2.5664.571.7713.3711 1.3889.8939 1.8078 1.4985"
                strokeWidth="2"
            />
            <circle
                cx="12"
                cy="9"
                r="3"
                stroke="currentColor"
                strokeWidth="2"
            />
        </svg>
    );
}
export default UserScan;
