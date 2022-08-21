import React, { SVGProps } from "react";

export function SendFill(props: SVGProps<SVGSVGElement>) {
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
                d="m9.9393 12.6464-2.2472-.7491C5.3389 11.1129 4.1623 10.7207 4.1623 10c0-.7208 1.1766-1.113 3.5298-1.8974l8.5132-2.8377c1.6558-.552 2.4837-.828 2.9207-.3909.437.437.161 1.265-.3909 2.9207l-2.8377 8.5132c-.7844 2.3532-1.1766 3.5298-1.8974 3.5298-.7207 0-1.1129-1.1766-1.8974-3.5298l-.749-2.2473 4.3535-4.3535c.3905-.3905.3905-1.0237 0-1.4142-.3905-.3906-1.0237-.3906-1.4142 0l-4.3536 4.3535Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default SendFill;
