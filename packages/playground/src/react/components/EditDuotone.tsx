import React, { SVGProps } from "react";

export function EditDuotone(props: SVGProps<SVGSVGElement>) {
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
                d="m6.5 16 2.3343.7182c2.07.637 4.1657-.9109 4.1657-3.0767C13 9.2432 18 10 18 5 18 5 7.5 5 6.1646 15.9114L6.5 16Z"
                fillOpacity=".24"
            />
            <path
                stroke="currentColor"
                d="m6.5 21.5-.323-3.5534C5.545 10.9943 11.019 5 18 5"
            />
        </svg>
    );
}
export default EditDuotone;
