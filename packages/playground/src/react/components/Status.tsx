import React, { SVGProps } from "react";

export function Status(props: SVGProps<SVGSVGElement>) {
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
                d="M14.5868 6.5847A1.9938 1.9938 0 0 1 16 5.9999c1.1046 0 2 .8955 2 2a1.9938 1.9938 0 0 1-.5847 1.4132 6.0249 6.0249 0 0 0-2.8285-2.8284Zm-4.3297-.3277a5.99 5.99 0 0 1 1.2578-2.2426C7.3225 4.2652 4 7.7446 4 11.9999c0 4.4183 3.5817 8 8 8 4.2554 0 7.7348-3.3225 7.9855-7.5148a5.991 5.991 0 0 1-2.2426 1.2578c-.7467 2.4637-3.0354 4.257-5.7429 4.257-3.3137 0-6-2.6863-6-6 0-2.7075 1.7934-4.9962 4.2571-5.7429Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
            <circle cx="16" cy="8" r="4" fill="currentColor" />
        </svg>
    );
}
export default Status;
