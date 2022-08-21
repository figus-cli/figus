import React, { SVGProps } from "react";

export function BookCheckLight(props: SVGProps<SVGSVGElement>) {
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
                d="M20 12v5c0 1.8856 0 2.8284-.5858 3.4142C18.8284 21 17.8856 21 16 21H6.5C5.1193 21 4 19.8807 4 18.5S5.1193 16 6.5 16H16c1.8856 0 2.8284 0 3.4142-.5858C20 14.8284 20 13.8856 20 12V7c0-1.8856 0-2.8284-.5858-3.4142C18.8284 3 17.8856 3 16 3H8c-1.8856 0-2.8284 0-3.4142.5858C4 4.1716 4 5.1144 4 7v11.5"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="m9 10 1.2929 1.2929c.3905.3905 1.0237.3905 1.4142 0L15 8"
            />
        </svg>
    );
}
export default BookCheckLight;
