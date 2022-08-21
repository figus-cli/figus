import React, { SVGProps } from "react";

export function EyeFill(props: SVGProps<SVGSVGElement>) {
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
                d="M2.9792 10.2709C4.3645 8.1981 7.2685 5 12 5c4.7314 0 7.6354 3.198 9.0207 5.2709.4648.6956.6973 1.0434.6761 1.686-.0211.6426-.288.99-.8216 1.6848C19.2861 15.7107 16.1129 19 12 19c-4.113 0-7.2862-3.2893-8.8753-5.3583-.5336-.6948-.8005-1.0422-.8216-1.6848-.0212-.6426.2113-.9904.6761-1.686ZM12 16c2.2092 0 4-1.7909 4-4 0-2.2091-1.7908-4-4-4-2.209 0-4 1.7909-4 4 0 2.2091 1.791 4 4 4Z"
            />
        </svg>
    );
}
export default EyeFill;
