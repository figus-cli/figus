import React, { SVGProps } from "react";

export function UserCicrleLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="10" r="3" stroke="currentColor" />
            <circle cx="12" cy="12" r="9" stroke="currentColor" />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M18 18.7059c-.3539-1.0632-1.1338-2.0026-2.2186-2.6727C14.6966 15.3632 13.3674 15 12 15s-2.6966.3632-3.7814 1.0332C7.1337 16.7033 6.3539 17.6427 6 18.7059"
            />
        </svg>
    );
}
export default UserCicrleLight;
