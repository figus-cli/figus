import React, { SVGProps } from "react";

export function UserAdd(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="8" r="4" stroke="currentColor" />
            <path
                fill="currentColor"
                d="M13.3267 15.0759A11.6142 11.6142 0 0 0 12 15c-1.9195 0-3.8062.4738-5.3689 1.3732-1.562.8989-2.7499 2.197-3.3002 3.7374-.1858.5201.0852 1.0924.6053 1.2782.52.1858 1.0923-.0852 1.2781-.6053.3613-1.0112 1.1822-1.9678 2.4144-2.6769 1.014-.5836 2.235-.9563 3.5293-1.0698.3309-.9767 1.1511-1.7276 2.1687-1.9609Z"
            />
            <path stroke="currentColor" d="M18 14v8m4-4h-8" />
        </svg>
    );
}
export default UserAdd;
