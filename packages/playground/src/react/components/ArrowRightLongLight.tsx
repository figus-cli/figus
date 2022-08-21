import React, { SVGProps } from "react";

export function ArrowRightLongLight(props: SVGProps<SVGSVGElement>) {
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
                d="M17 11.5a.5.5 0 0 1 0 1v-1Zm-14 1a.5.5 0 0 1 0-1v1Zm14 0H3v-1h14v1Z"
            />
            <path
                fill="currentColor"
                d="M21.6427 11.7856 18.2116 9.727c-.5332-.32-1.2116.064-1.2116.686v3.174c0 .6219.6784 1.006 1.2116.686l3.4311-2.0586c.1618-.0971.1618-.3317 0-.4288Z"
            />
        </svg>
    );
}
export default ArrowRightLongLight;
