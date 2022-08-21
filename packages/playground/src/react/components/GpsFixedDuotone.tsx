import React, { SVGProps } from "react";

export function GpsFixedDuotone(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="12" r="3" fill="currentColor" />
            <path
                fill="currentColor"
                d="M12 2.4a.6.6 0 0 1 .6.6v2a.708.708 0 0 1-.0005.0253c3.3877.2874 6.0879 2.9875 6.3752 6.3753l.0119-.0004L19 11.4h2a.6.6 0 0 1 0 1.2h-2l-.0152-.0002-.0101-.0003c-.2873 3.3878-2.9875 6.0879-6.3752 6.3752l.0003.0101L12.6 19v2a.6.6 0 1 1-1.2 0v-2l.0001-.0134.0004-.0119c-3.3877-.2873-6.0879-2.9874-6.3752-6.3752A.708.708 0 0 1 5 12.6H3a.6.6 0 1 1 0-1.2h2c.0085 0 .017.0002.0253.0006.2873-3.3878 2.9875-6.088 6.3752-6.3753A.708.708 0 0 1 11.4 5V3a.6.6 0 0 1 .6-.6ZM12 18c3.3137 0 6-2.6863 6-6s-2.6863-6-6-6-6 2.6863-6 6 2.6863 6 6 6Z"
                clipRule="evenodd"
                fillOpacity=".24"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default GpsFixedDuotone;
