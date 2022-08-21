import React, { SVGProps } from "react";

export function ViewHorizontFill(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                stroke="currentColor"
                d="M11.7248 7.3818a9.0007 9.0007 0 0 1 .3644 8.5635"
                strokeWidth="2"
            />
            <path
                stroke="currentColor"
                d="M14 5c-2.8143 2.8143-10.0286 6.5086-10.9111 6.9552a.0502.0502 0 0 0 0 .0896C3.9714 12.4914 11.1857 16.1857 14 19m2-7h5m-5-3 5-2m-5 8 5 2"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                d="M13.6873 9.5187a10.0026 10.0026 0 0 0-.8233-2.148L4 12l8.721 4.8933a10.0013 10.0013 0 0 0 .9665-2.4129A2.9868 2.9868 0 0 1 12 14.9996c-1.6569 0-3-1.3431-3-3 0-1.6568 1.3431-3 3-3 .6256 0 1.2065.1915 1.6873.5191Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default ViewHorizontFill;
