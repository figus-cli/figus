import React, { SVGProps } from "react";

export function FormFill(props: SVGProps<SVGSVGElement>) {
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
                d="M3.5858 2.5858C3 3.1716 3 4.1144 3 6v10c0 2.8284 0 4.2426.8787 5.1213.6413.6413 1.5679.8146 3.1213.8614V19c0-.5523.4477-1 1-1s1 .4477 1 1v3h6v-3c0-.5523.4477-1 1-1s1 .4477 1 1v2.9827c1.5534-.0468 2.48-.2201 3.1213-.8614C21 20.2426 21 18.8284 21 16V6c0-1.8856 0-2.8284-.5858-3.4142C19.8284 2 18.8856 2 17 2H7c-1.8856 0-2.8284 0-3.4142.5858ZM8 8c-.5523 0-1 .4477-1 1s.4477 1 1 1h8c.5523 0 1-.4477 1-1s-.4477-1-1-1H8Zm0 6h8c.5523 0 1-.4477 1-1s-.4477-1-1-1H8c-.5523 0-1 .4477-1 1s.4477 1 1 1Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default FormFill;
