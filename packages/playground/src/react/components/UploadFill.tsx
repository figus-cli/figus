import React, { SVGProps } from "react";

export function UploadFill(props: SVGProps<SVGSVGElement>) {
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
                d="M7.1716 13H6c-1.6569 0-3-1.3431-3-3s1.3431-3 3-3c.2795 0 .4193 0 .517-.0197.298-.06.4395-.1515.6163-.3989.058-.081.1395-.2629.3028-.6266C8.2178 4.2131 9.9672 3 12 3c2.0328 0 3.7822 1.213 4.5639 2.9548.1633.3637.2449.5456.3028.6266.1768.2474.3183.339.6163.399C17.5807 7 17.7205 7 18 7c1.6569 0 3 1.3431 3 3s-1.3431 3-3 3h-1.1716l-3.4142-3.4142L12 8.1716l-1.4142 1.4142L7.1716 13Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
            <path
                fill="currentColor"
                d="m12 12-.7071-.7071.7071-.7071.7071.7071L12 12Zm1 9c0 .5523-.4477 1-1 1s-1-.4477-1-1h2Zm-5.7071-5.7071 4-4 1.4142 1.4142-4 4-1.4142-1.4142Zm5.4142-4 4 4-1.4142 1.4142-4-4 1.4142-1.4142ZM13 12v9h-2v-9h2Z"
            />
        </svg>
    );
}
export default UploadFill;
