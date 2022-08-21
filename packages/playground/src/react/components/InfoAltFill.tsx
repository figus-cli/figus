import React, { SVGProps } from "react";

export function InfoAltFill(props: SVGProps<SVGSVGElement>) {
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
                d="M12 21c-4.9706 0-9-4.0294-9-9s4.0294-9 9-9 9 4.0294 9 9-4.0294 9-9 9Zm0-14c-.5523 0-1 .4477-1 1s.4477 1 1 1h.01c.5523 0 1-.4477 1-1s-.4477-1-1-1H12Zm-1.5 4c-.5523 0-1 .4477-1 1s.4477 1 1 1h.5v3c0 .5523.4477 1 1 1h2c.5523 0 1-.4477 1-1s-.4477-1-1-1h-1v-3c0-.5523-.4477-1-1-1h-1.5Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default InfoAltFill;
