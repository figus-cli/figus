import React, { SVGProps } from "react";

export function CodeLight(props: SVGProps<SVGSVGElement>) {
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
                d="m20 12 .3904-.3123.2499.3123-.2499.3123L20 12Zm-3.6096-5.3124 4 5.0001-.7808.6246-4-5 .7808-.6246Zm4 5.6247-4 5-.7808-.6246 4-5 .7808.6246ZM4 12l-.3904-.3123-.25.3123.25.3123L4 12Zm3.6096-5.3124-4 5.0001.7808.6246 4-5-.7808-.6246Zm-4 5.6247 4 5 .7808-.6246-4-5-.7808.6246Z"
            />
        </svg>
    );
}
export default CodeLight;
