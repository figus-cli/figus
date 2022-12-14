import React, { SVGProps } from "react";

export function DeskDuotone(props: SVGProps<SVGSVGElement>) {
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
                d="M8 5.3087c0-.1438 0-.2157-.0454-.2599-.0455-.0442-.1167-.0421-.2592-.038-1.053.0299-1.6781.1435-2.1096.575C5 6.1716 5 7.1144 5 9v7c0 1.8856 0 2.8284.5858 3.4142C6.1716 20 7.1144 20 9 20h6c1.8856 0 2.8284 0 3.4142-.5858C19 18.8284 19 17.8856 19 16V9c0-1.8856 0-2.8284-.5858-3.4142-.4315-.4315-1.0566-.5451-2.1096-.575-.1425-.0041-.2137-.0062-.2591.038C16 5.093 16 5.165 16 5.3088V6.5c0 .8284-.6716 1.5-1.5 1.5S13 7.3284 13 6.5V5.3c0-.1414 0-.2121-.0439-.256C12.9121 5 12.8414 5 12.7 5h-1.4c-.1414 0-.2121 0-.2561.044C11 5.0878 11 5.1585 11 5.3v1.2c0 .8284-.6716 1.5-1.5 1.5S8 7.3284 8 6.5V5.3087Z"
                clipRule="evenodd"
                fillOpacity=".24"
                fillRule="evenodd"
            />
            <path
                stroke="currentColor"
                d="M9.5 3.5v3m5-3v3m-5 4h5m-5 3h5m-5 3h5"
            />
        </svg>
    );
}
export default DeskDuotone;
