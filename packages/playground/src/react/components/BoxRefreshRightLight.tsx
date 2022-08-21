import React, { SVGProps } from "react";

export function BoxRefreshRightLight(props: SVGProps<SVGSVGElement>) {
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
                d="m14 16 .3536-.3536.3535.3536-.3535.3536L14 16Zm-3.6464-4.3536 4 4-.7072.7072-4-4 .7072-.7072Zm4 4.7072-4 4-.7072-.7072 4-4 .7072.7072Z"
            />
            <path
                stroke="currentColor"
                d="M20 13.5V10c0-1.1046-.8954-2-2-2H6c-1.1046 0-2 .8954-2 2v4c0 1.1046.8954 2 2 2h7"
            />
        </svg>
    );
}
export default BoxRefreshRightLight;
