import React, { SVGProps } from "react";

export function Table(props: SVGProps<SVGSVGElement>) {
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
                d="M15 9h6v9c0 .9428 0 1.4142-.2929 1.7071C20.4142 20 19.9428 20 19 20h-4V9ZM3 9h6v11H5c-.9428 0-1.4142 0-1.7071-.2929C3 19.4142 3 18.9428 3 18V9Z"
            />
            <path fill="currentColor" stroke="currentColor" d="M9 9h6v11H9z" />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M3 6c0-.9428 0-1.4142.2929-1.7071C3.5858 4 4.0572 4 5 4h14c.9428 0 1.4142 0 1.7071.2929C21 4.5858 21 5.0572 21 6v3H3V6Z"
            />
        </svg>
    );
}
export default Table;
