import React, { SVGProps } from "react";

export function Terminal(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <rect
                width="17"
                height="14"
                x="3"
                y="5"
                stroke="currentColor"
                rx="2"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                d="M7.7071 9.2929c-.3905-.3905-1.0237-.3905-1.4142 0-.3905.3905-.3905 1.0237 0 1.4142L7.707 9.2929Zm-1.4142 4c-.3905.3905-.3905 1.0237 0 1.4142.3905.3905 1.0237.3905 1.4142 0L6.293 13.2929ZM9 12l.7071.7071c.3905-.3905.3905-1.0237 0-1.4142L9 12Zm-2.7071-1.2929 2 2 1.4142-1.4142-2-2L6.293 10.707Zm2 .5858-2 2 1.4142 1.4142 2-2-1.4142-1.4142Z"
            />
            <path stroke="currentColor" d="M12 14h4" strokeWidth="2" />
        </svg>
    );
}
export default Terminal;
