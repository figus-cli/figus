import React, { SVGProps } from "react";

export function ViewHorizontDuotone(props: SVGProps<SVGSVGElement>) {
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
                d="M12.864 7.3707a10.0008 10.0008 0 0 1-.143 9.5226L4 12l8.864-4.6293Z"
                fillOpacity=".24"
            />
            <path
                stroke="currentColor"
                d="M14.5 5.5c-2.7811 3.7081-9.8591 6.1272-10.8773 6.4605a.0488.0488 0 0 0-.0046.0918c1.001.446 8.0965 3.6623 10.8819 6.4477"
            />
            <path
                fill="currentColor"
                d="M13.5498 9.0333a10.0015 10.0015 0 0 1 .0001 5.933C12.1066 14.7491 11 13.5037 11 11.9998s1.1065-2.7493 2.5498-2.9665Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
            <path
                stroke="currentColor"
                d="M16.5 12h4m-4-2.5 4-1.5m-4 6.5 4 1.5"
                strokeOpacity=".24"
            />
        </svg>
    );
}
export default ViewHorizontDuotone;
