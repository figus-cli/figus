import React, { SVGProps } from "react";

export function ArrowLeftLongLight(props: SVGProps<SVGSVGElement>) {
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
                d="M7 11.5a.5.5 0 0 0 0 1v-1Zm14 1a.5.5 0 0 0 0-1v1Zm-14 0h14v-1H7v1Z"
            />
            <path
                fill="currentColor"
                d="M2.3573 11.7856 5.7884 9.727C6.3216 9.407 7 9.791 7 10.413v3.174c0 .6219-.6784 1.006-1.2116.686l-3.4311-2.0586c-.1618-.0971-.1618-.3317 0-.4288Z"
            />
        </svg>
    );
}
export default ArrowLeftLongLight;
