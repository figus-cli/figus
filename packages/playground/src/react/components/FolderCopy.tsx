import React, { SVGProps } from "react";

export function FolderCopy(props: SVGProps<SVGSVGElement>) {
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
                stroke="currentColor"
                d="M9 6c0-.9428 0-1.4142.2929-1.7071C9.5858 4 10.0572 4 11 4h1.7639c.6014 0 .9021 0 1.1438.1494.2416.1493.3761.4183.6451.9562L15.5 7H19c.9428 0 1.4142 0 1.7071.2929C21 7.5858 21 8.0572 21 9v3c0 .9428 0 1.4142-.2929 1.7071C20.4142 14 19.9428 14 19 14h-8c-.9428 0-1.4142 0-1.7071-.2929C9 13.4142 9 12.9428 9 12V6Z"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M6 7H5c-1.1046 0-2 .8954-2 2v1m3 10H5c-1.1046 0-2-.8954-2-2v-1m10 3h1c1.1046 0 2-.8954 2-2v-1m-5 3H8m-5-8v3"
            />
        </svg>
    );
}
export default FolderCopy;
