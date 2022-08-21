import React, { SVGProps } from "react";

export function RemoteLight(props: SVGProps<SVGSVGElement>) {
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
                d="m11 9 .3904-.3124.2499.3124-.2499.3124L11 9ZM7.3904 3.6876l4 5-.7808.6248-4-5 .7808-.6248Zm4 5.6248-4 4.9999-.7808-.6246 4-5 .7808.6247ZM13 15l-.3904-.3123-.2499.3123.2499.3123L13 15Zm3.6096-5.3124-4 5.0001.7808.6246 4-5-.7808-.6247Zm-4 5.6247 4 5 .7808-.6246-4-5-.7808.6246Z"
            />
        </svg>
    );
}
export default RemoteLight;
