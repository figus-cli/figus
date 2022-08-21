import React, { SVGProps } from "react";

export function RefundBackLight(props: SVGProps<SVGSVGElement>) {
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
                d="m4 8-.3535.3536L3.2929 8l.3536-.3536L4 8Zm5 11.5a.5.5 0 0 1 0-1v1Zm-.3536-6.1464-5-5 .7072-.7072 5 5-.7072.7072Zm-5-5.7072 5-5 .7072.7071-5 5-.7071-.707ZM4 7.5h10.5v1H4v-1Zm10.5 12H9v-1h5.5v1Zm6-6c0 3.3137-2.6863 6-6 6v-1c2.7614 0 5-2.2386 5-5h1Zm-6-6c3.3137 0 6 2.6863 6 6h-1c0-2.7614-2.2386-5-5-5v-1Z"
            />
        </svg>
    );
}
export default RefundBackLight;
