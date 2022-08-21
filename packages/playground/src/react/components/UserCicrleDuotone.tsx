import React, { SVGProps } from "react";

export function UserCicrleDuotone(props: SVGProps<SVGSVGElement>) {
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
                d="M3 12c0-4.9706 4.0294-9 9-9s9 4.0294 9 9-4.0294 9-9 9-9-4.0294-9-9Z"
            />
            <circle cx="12" cy="10" r="4" fill="currentColor" />
            <path
                fill="currentColor"
                d="M18.2209 18.2462a.2386.2386 0 0 1-.0414.297C16.5674 20.0662 14.3928 21 12 21c-2.3927 0-4.5674-.9337-6.1794-2.4567a.2387.2387 0 0 1-.0414-.297C6.9434 16.318 9.2922 15 12 15c2.7078 0 5.0566 1.3179 6.2208 3.2462Z"
            />
        </svg>
    );
}
export default UserCicrleDuotone;
