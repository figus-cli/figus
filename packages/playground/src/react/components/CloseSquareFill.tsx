import React, { SVGProps } from "react";

export function CloseSquareFill(props: SVGProps<SVGSVGElement>) {
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
                d="M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9ZM6.5858 16l.707-.7071L10.5859 12l-3.293-3.2929L6.5859 8 8 6.5858l.7071.707L12 10.5859l3.2929-3.293.7071-.707L17.4142 8l-.7071.7071L13.4142 12l3.2929 3.2929.7071.7071L16 17.4142l-.7071-.7071L12 13.4142l-3.2929 3.2929L8 17.4142 6.5858 16Z"
            />
        </svg>
    );
}
export default CloseSquareFill;
