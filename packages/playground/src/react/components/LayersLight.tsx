import React, { SVGProps } from "react";

export function LayersLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                stroke="currentColor"
                d="M12 4 5 7l7 3 7-3-7-3Z"
                strokeLinejoin="round"
            />
            <path
                fill="currentColor"
                d="m7.66 10.316-2.857 1.2244a.5.5 0 0 0 0 .9192l7 3a.5002.5002 0 0 0 .394 0l7-3a.5.5 0 0 0 0-.9192l-2.8571-1.2244-1.2693.544L17.7307 12 12 14.456 6.2693 12l2.66-1.14-1.2692-.544Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
            <path
                fill="currentColor"
                d="m7.66 15.316-2.857 1.2244a.5.5 0 0 0 0 .9192l7 3a.5002.5002 0 0 0 .394 0l7-3a.5.5 0 0 0 0-.9192l-2.8571-1.2244-1.2693.544L17.7307 17 12 19.456 6.2693 17l2.66-1.14-1.2692-.544Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default LayersLight;
