import React, { SVGProps } from "react";

export function FileDockDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                d="M13 7V3H9c-1.8856 0-2.8284 0-3.4142.5858C5 4.1716 5 5.1144 5 7v10c0 1.8856 0 2.8284.5858 3.4142C6.1716 21 7.1144 21 9 21h6c1.8856 0 2.8284 0 3.4142-.5858C19 19.8284 19 18.8856 19 17V9h-4c-.9428 0-1.4142 0-1.7071-.2929C13 8.4142 13 7.9428 13 7Z"
            />
            <path
                stroke="currentColor"
                d="M13.1716 3H9c-1.8856 0-2.8284 0-3.4142.5858C5 4.1716 5 5.1144 5 7v10c0 1.8856 0 2.8284.5858 3.4142C6.1716 21 7.1144 21 9 21h6c1.8856 0 2.8284 0 3.4142-.5858C19 19.8284 19 18.8856 19 17V8.8284c0-.4087 0-.6131-.0761-.7969-.0761-.1837-.2207-.3283-.5097-.6173l-3.8284-3.8284c-.289-.289-.4336-.4336-.6173-.5097C13.7847 3 13.5803 3 13.1716 3Z"
            />
            <path stroke="currentColor" d="M9 13h6m-6 4h4" />
            <path
                stroke="currentColor"
                d="M13 3v4c0 .9428 0 1.4142.2929 1.7071C13.5858 9 14.0572 9 15 9h4"
            />
        </svg>
    );
}
export default FileDockDuotoneLine;
