import React, { SVGProps } from "react";

export function ArrowDropDown(props: SVGProps<SVGSVGElement>) {
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
                d="m11.8079 14.7695-3.7144-4.4574C7.6592 9.7911 8.0298 9 8.708 9h6.584c.6782 0 1.0488.791.6145 1.3121l-3.7144 4.4574a.25.25 0 0 1-.3842 0Z"
            />
        </svg>
    );
}
export default ArrowDropDown;
