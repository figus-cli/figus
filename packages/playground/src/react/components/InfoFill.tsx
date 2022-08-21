import React, { SVGProps } from "react";

export function InfoFill(props: SVGProps<SVGSVGElement>) {
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
                d="M2 12c0 5.5228 4.4771 10 10 10 5.5228 0 10-4.4772 10-10 0-5.5229-4.4772-10-10-10C6.4771 2 2 6.4771 2 12Zm11-1v8h-2v-8h2Zm-2-4v1h2V5h-2v2Z"
            />
        </svg>
    );
}
export default InfoFill;
