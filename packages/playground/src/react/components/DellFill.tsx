import React, { SVGProps } from "react";

export function DellFill(props: SVGProps<SVGSVGElement>) {
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
                d="M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Zm-9 1.4142-3.2929 3.2929-1.4142-1.4142L10.5858 12l-3.293-3.2929L8.7072 7.293 12 10.5858l3.2929-3.293 1.4142 1.4143L13.4142 12l3.2929 3.2929-1.4142 1.4142L12 13.4142Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default DellFill;
