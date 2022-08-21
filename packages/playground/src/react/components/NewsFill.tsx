import React, { SVGProps } from "react";

export function NewsFill(props: SVGProps<SVGSVGElement>) {
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
                d="M4.0017 9h15.9966c-.0121-2.175-.1086-3.353-.877-4.1213C18.2426 4 16.8284 4 14 4h-4c-2.8284 0-4.2426 0-5.1213.8787C4.1103 5.647 4.0138 6.825 4.0017 9ZM20 11H4v3c0 2.8284 0 4.2426.8787 5.1213C5.7574 20 7.1716 20 10 20h4c2.8284 0 4.2426 0 5.1213-.8787C20 18.2426 20 16.8284 20 14v-3Z"
            />
        </svg>
    );
}
export default NewsFill;
