import React, { SVGProps } from "react";

export function UserFill(props: SVGProps<SVGSVGElement>) {
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
                d="M19.6515 19.4054c.5528-.1152.8821-.6937.6074-1.1871-.6056-1.0876-1.5596-2.0434-2.7801-2.7718C15.907 14.5085 13.9812 14 12 14c-1.9812 0-3.907.5085-5.4789 1.4465-1.2204.7284-2.1744 1.6842-2.78 2.7718-.2747.4934.0545 1.0719.6073 1.1871a37.5029 37.5029 0 0 0 15.3031 0Z"
            />
            <circle cx="12" cy="8" r="5" fill="currentColor" />
        </svg>
    );
}
export default UserFill;
