import React, { SVGProps } from "react";

export function ReduceLight(props: SVGProps<SVGSVGElement>) {
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
                d="M15 15v-.5h-.5v.5h.5Zm5.6464 6.3536a.5002.5002 0 0 0 .7072 0 .5002.5002 0 0 0 0-.7072l-.7072.7072ZM15 9h-.5v.5h.5V9Zm6.3536-5.6464a.5001.5001 0 0 0-.7072-.7071l.7072.707ZM9 15h.5v-.5H9v.5Zm-6.3536 5.6464a.5001.5001 0 0 0 .7071.7072l-.707-.7072ZM9 9v.5h.5V9H9ZM3.3536 2.6464a.5.5 0 1 0-.7071.7071l.707-.707ZM15.5 20v-5h-1v5h1Zm-.5-4.5h5v-1h-5v1Zm-.3536-.1464 6 6 .7072-.7072-6-6-.7072.7072ZM14.5 4v5h1V4h-1Zm.5 5.5h5v-1h-5v1Zm.3536-.1464 6-6-.7072-.7071-6 6 .7072.707ZM9.5 20v-5h-1v5h1ZM9 14.5H4v1h5v-1Zm-.3536.1464-6 6 .7071.7072 6-6-.707-.7072ZM8.5 4v5h1V4h-1ZM9 8.5H4v1h5v-1Zm.3536.1464-6-6-.7071.7071 6 6 .707-.707Z"
            />
        </svg>
    );
}
export default ReduceLight;
