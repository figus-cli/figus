import React, { SVGProps } from "react";

export function DownloadFill(props: SVGProps<SVGSVGElement>) {
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
                d="M14.5 10.6693v2.3313c0 1.3807-1.1193 2.5-2.5 2.5s-2.5-1.1193-2.5-2.5v-2.3313a5.021 5.021 0 0 0-2.064 2.2859c-.1632.3637-.2448.5456-.3027.6266-.1768.2474-.3183.339-.6163.3989-.0977.0197-.2375.0197-.517.0197-1.6569 0-3 1.3431-3 3s1.3431 3 3 3h12c1.6569 0 3-1.3431 3-3s-1.3431-3-3-3c-.2795 0-.4193 0-.517-.0197-.298-.0599-.4395-.1515-.6163-.3989-.0579-.081-.1395-.2629-.3028-.6266A5.0203 5.0203 0 0 0 14.5 10.6693Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
            <path
                fill="currentColor"
                d="m12 3-.7071-.7071L12 1.5858l.7071.707L12 3Zm1 10c0 .5523-.4477 1-1 1s-1-.4477-1-1h2ZM7.2929 6.2929l4-4 1.4142 1.4142-4 4L7.293 6.293Zm5.4142-4 4 4-1.4142 1.4142-4-4 1.4142-1.4142ZM13 3v10h-2V3h2Z"
            />
        </svg>
    );
}
export default DownloadFill;
