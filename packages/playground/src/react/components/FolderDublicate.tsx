import React, { SVGProps } from "react";

export function FolderDublicate(props: SVGProps<SVGSVGElement>) {
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
                d="M8 7c0-.9428 0-1.4142.2929-1.7071C8.5858 5 9.0572 5 10 5h1.7639c.6014 0 .9021 0 1.1438.1494.2416.1493.3761.4183.6451.9562L14.5 8H18c.9428 0 1.4142 0 1.7071.2929C20 8.5858 20 9.0572 20 10v3c0 .9428 0 1.4142-.2929 1.7071C19.4142 15 18.9428 15 18 15h-8c-.9428 0-1.4142 0-1.7071-.2929C8 14.4142 8 13.9428 8 13V7Z"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M17 15v2.4c0 .5601 0 .8401-.109 1.054a.9998.9998 0 0 1-.437.437C16.2401 19 15.9601 19 15.4 19H5.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C4 18.2401 4 17.9601 4 17.4V9.6c0-.56 0-.84.109-1.054a1.0001 1.0001 0 0 1 .437-.437C4.76 8 5.04 8 5.6 8H8"
            />
        </svg>
    );
}
export default FolderDublicate;
