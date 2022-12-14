import React, { SVGProps } from "react";

export function SoundFill(props: SVGProps<SVGSVGElement>) {
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
                d="M13 16.7531V14H8.8176c-1.6168 0-2.9875 1.1888-3.2161 2.7893-.303 2.1206 1.4934 3.9488 3.619 3.6831l.5577-.0697C11.6187 20.1727 13 18.608 13 16.7531Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
            <path
                stroke="currentColor"
                d="M13 8v-.6115c0-1.6183 0-2.4275.4739-2.987.474-.5595 1.2721-.6925 2.8685-.9586l2.3567-.3927c.1358-.0227.2037-.034.2403.0057.0367.0397.02.1065-.0134.24l-.8954 3.5813c-.0149.0597-.0223.0895-.0433.1095-.021.02-.0511.026-.1115.0381L13 8Zm0 0v6m0 0v2.7531c0 1.8549-1.3813 3.4196-3.2218 3.6496l-.5577.0697c-2.1256.2657-3.922-1.5625-3.619-3.6831C5.83 15.1888 7.2008 14 8.8175 14H13Z"
                strokeWidth="2"
            />
        </svg>
    );
}
export default SoundFill;
