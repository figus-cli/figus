import React, { SVGProps } from "react";

export function UserAddDuotone(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="8" r="4" fill="currentColor" />
            <path
                fill="currentColor"
                d="M12 13c-3.6697 0-6.6798 2.4204-6.976 5.5004-.0265.2749.1999.4996.476.4996h13c.2762 0 .5025-.2247.4761-.4996C18.6799 15.4204 15.6697 13 12 13Z"
            />
            <path stroke="currentColor" d="M18.5 13.5v6m-3-3h6" />
        </svg>
    );
}
export default UserAddDuotone;
