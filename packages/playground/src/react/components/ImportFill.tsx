import React, { SVGProps } from "react";

export function ImportFill(props: SVGProps<SVGSVGElement>) {
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
                d="m6.2929 9.7071 5 5 .7071.7071.7071-.7071 5-5-1.4142-1.4142L13 11.5858V4h5c1.1046 0 2 .8954 2 2v12c0 1.1046-.8954 2-2 2H6c-1.1046 0-2-.8954-2-2V6c0-1.1046.8954-2 2-2h5v7.5858l-3.2929-3.293L6.293 9.7072Z"
            />
        </svg>
    );
}
export default ImportFill;
