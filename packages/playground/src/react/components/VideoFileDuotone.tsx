import React, { SVGProps } from "react";

export function VideoFileDuotone(props: SVGProps<SVGSVGElement>) {
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
                d="M13 3H7c-1.1046 0-2 .8954-2 2v14c0 1.1046.8954 2 2 2h10c1.1046 0 2-.8954 2-2V9h-3.5C14.1193 9 13 7.8807 13 6.5V3Zm5.8178 5a1.9988 1.9988 0 0 0-.4104-.587l-3.8708-3.834A1.999 1.999 0 0 0 14 3.1995V6.5c0 .8284.6716 1.5 1.5 1.5h3.3178Z"
            />
            <path
                fill="currentColor"
                d="M10 16.1169v-4.2338c0-.3887.424-.6287.7572-.4288l3.5282 2.117c.3237.1942.3237.6632 0 .8574l-3.5282 2.117c-.3332.1999-.7572-.0401-.7572-.4288Z"
            />
        </svg>
    );
}
export default VideoFileDuotone;
