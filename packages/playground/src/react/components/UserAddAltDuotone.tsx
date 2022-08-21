import React, { SVGProps } from "react";

export function UserAddAltDuotone(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle
                cx="10"
                cy="10"
                r="4"
                fill="currentColor"
                fillOpacity=".24"
            />
            <path
                fill="currentColor"
                d="M16.221 18.2462a.2387.2387 0 0 1-.0414.297C14.5675 20.0662 12.3928 21 10.0001 21c-2.3928 0-4.5674-.9337-6.1795-2.4567a.2387.2387 0 0 1-.0414-.297C4.9434 16.318 7.2922 15 10.0001 15c2.7079 0 5.0567 1.3179 6.2209 3.2462Z"
                clipRule="evenodd"
                fillOpacity=".24"
                fillRule="evenodd"
            />
            <path stroke="currentColor" d="M18.5 10.5v6m-3-3h6" />
        </svg>
    );
}
export default UserAddAltDuotone;
