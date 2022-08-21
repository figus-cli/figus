import React, { SVGProps } from "react";

export function MouseLight(props: SVGProps<SVGSVGElement>) {
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
                d="M5 10.8c0-2.6187 0-3.9281.5894-4.89A3.9998 3.9998 0 0 1 6.91 4.5894C7.872 4 9.1813 4 11.8 4h.4c2.6187 0 3.9281 0 4.89.5894A4.001 4.001 0 0 1 18.4106 5.91C19 6.872 19 8.1813 19 10.8V14c0 .9288 0 1.3933-.0513 1.7832-.3545 2.6924-2.4731 4.811-5.1655 5.1655C13.3933 21 12.9288 21 12 21c-.9288 0-1.3933 0-1.7832-.0513-2.6924-.3545-4.811-2.4731-5.1655-5.1655C5 15.3933 5 14.9288 5 14v-3.2Z"
            />
            <path fill="currentColor" stroke="currentColor" d="M12 4v5" />
        </svg>
    );
}
export default MouseLight;
