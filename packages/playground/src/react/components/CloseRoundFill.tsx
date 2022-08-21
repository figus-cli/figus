import React, { SVGProps } from "react";

export function CloseRoundFill(props: SVGProps<SVGSVGElement>) {
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
                d="M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9ZM7.2929 16.7071c-.3905-.3905-.3905-1.0237 0-1.4142L10.5858 12l-3.293-3.2929c-.3904-.3905-.3904-1.0237 0-1.4142.3906-.3905 1.0238-.3905 1.4143 0L12 10.5858l3.2929-3.293c.3905-.3904 1.0237-.3904 1.4142 0 .3905.3906.3905 1.0238 0 1.4143L13.4142 12l3.2929 3.2929c.3905.3905.3905 1.0237 0 1.4142-.3905.3905-1.0237.3905-1.4142 0L12 13.4142l-3.2929 3.2929c-.3905.3905-1.0237.3905-1.4142 0Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default CloseRoundFill;
