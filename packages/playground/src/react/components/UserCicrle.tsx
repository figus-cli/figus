import React, { SVGProps } from "react";

export function UserCicrle(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle
                cx="12"
                cy="10"
                r="3"
                stroke="currentColor"
                strokeWidth="2"
            />
            <circle
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                d="M17.7805 18.8264c.1271-.0698.1873-.2209.1335-.3556-.3856-.9663-1.1284-1.8174-2.1326-2.4376C14.6966 15.3632 13.3674 15 12 15s-2.6966.3632-3.7814 1.0332c-1.0042.6202-1.747 1.4713-2.1326 2.4376-.0538.1347.0064.2858.1335.3556a12.0112 12.0112 0 0 0 11.561 0Z"
            />
        </svg>
    );
}
export default UserCicrle;
