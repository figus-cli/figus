import React, { SVGProps } from "react";

export function BookmarkLight(props: SVGProps<SVGSVGElement>) {
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
                d="M4 9c0-2.8284 0-4.2426.8787-5.1213C5.7574 3 7.1716 3 10 3h4c2.8284 0 4.2426 0 5.1213.8787C20 4.7574 20 6.1716 20 9v6.8276c0 2.6833 0 4.0249-.8443 4.4353-.8443.4104-1.8992-.4185-4.0092-2.0763l-.6752-.5306c-1.1864-.9321-1.7796-1.3982-2.4713-1.3982-.6917 0-1.2849.4661-2.4713 1.3982l-.6752.5306c-2.11 1.6578-3.165 2.4867-4.0092 2.0763C4 19.8525 4 18.5109 4 15.8276V9Z"
            />
        </svg>
    );
}
export default BookmarkLight;
