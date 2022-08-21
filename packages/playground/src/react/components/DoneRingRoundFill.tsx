import React, { SVGProps } from "react";

export function DoneRingRoundFill(props: SVGProps<SVGSVGElement>) {
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
                d="M12 21c4.9706 0 9-4.0294 9-9 0-1.8334-.5482-3.5388-1.4897-4.961l-7.1553 7.9503c-.6926.7696-1.8582.8833-2.6866.262L6.4 12.8c-.4418-.3314-.5314-.9582-.2-1.4.3314-.4418.9582-.5314 1.4-.2l3.2684 2.4513 7.3456-8.1618C16.5986 3.9472 14.4099 3 12 3c-4.9706 0-9 4.0294-9 9s4.0294 9 9 9Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default DoneRingRoundFill;
