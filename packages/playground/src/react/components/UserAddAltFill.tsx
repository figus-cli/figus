import React, { SVGProps } from "react";

export function UserAddAltFill(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="10" cy="8" r="5" fill="currentColor" />
            <path stroke="currentColor" d="M19 10v6m3-3h-6" />
            <path
                fill="currentColor"
                d="M17.1421 20.3825c.4617-.1045.7385-.5844.5339-1.0112-.5518-1.151-1.4587-2.1625-2.6341-2.9248C13.5955 15.5085 11.8232 15 10 15s-3.5954.5085-5.0419 1.4465c-1.1754.7623-2.0823 1.7737-2.6341 2.9248-.2046.4268.0722.9067.5339 1.0112a32.3334 32.3334 0 0 0 14.2842 0Z"
            />
        </svg>
    );
}
export default UserAddAltFill;
