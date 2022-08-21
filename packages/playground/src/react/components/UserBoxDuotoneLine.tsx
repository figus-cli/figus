import React, { SVGProps } from "react";

export function UserBoxDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                d="M3.1716 3.1716C2 4.343 2 6.2288 2 10v4c0 3.7712 0 5.6569 1.1716 6.8284.6534.6534 1.5288.9424 2.8296 1.0702C6.066 19.184 8.727 17 12 17c3.2731 0 5.934 2.184 5.9988 4.8986 1.3008-.1278 2.1762-.4168 2.8296-1.0702C22 19.6569 22 17.7712 22 14v-4c0-3.7712 0-5.6569-1.1716-6.8284C19.6569 2 17.7712 2 14 2h-4C6.2288 2 4.3431 2 3.1716 3.1716ZM12 13c1.6569 0 3-1.3431 3-3s-1.3431-3-3-3-3 1.3431-3 3 1.3431 3 3 3Z"
                clipRule="evenodd"
                fillOpacity=".24"
                fillRule="evenodd"
            />
            <path
                stroke="currentColor"
                d="M17.9407 21.2989c-.2012-1.1843-.9052-2.2691-1.9842-3.0578s-2.4615-1.2289-3.8966-1.2409c-1.4352-.0119-2.828.4053-3.9256 1.1758-1.0976.7706-1.8274 1.8436-2.057 3.0242"
                strokeWidth="1.2"
            />
            <circle
                cx="12"
                cy="10"
                r="3"
                stroke="currentColor"
                strokeWidth="1.2"
            />
            <rect
                width="18.8"
                height="18.8"
                x="2.6"
                y="2.6"
                stroke="currentColor"
                rx="3.4"
                strokeWidth="1.2"
            />
        </svg>
    );
}
export default UserBoxDuotoneLine;
