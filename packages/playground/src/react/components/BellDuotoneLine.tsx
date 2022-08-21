import React, { SVGProps } from "react";

export function BellDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                d="M6 8c0-3.3137 2.6863-6 6-6s6 2.6863 6 6v1.831a7.83 7.83 0 0 0 1.116 4.0289l.5534.9224c.367.6118.5506.9177.5631 1.1674a1 1 0 0 1-.528.9326C19.4839 17 19.1272 17 18.4138 17H5.5863c-.7134 0-1.0702 0-1.2908-.1177a1.0001 1.0001 0 0 1-.528-.9326c.0126-.2497.196-.5556.5632-1.1674l.5534-.9224A7.8307 7.8307 0 0 0 6 9.8309V8Z"
                fillOpacity=".24"
            />
            <path
                fill="currentColor"
                d="M14.35 18c.0828 0 .1507.0673.143.1498-.0446.4756-.3007.9248-.7252 1.2644C13.2989 19.7893 12.663 20 12 20s-1.2989-.2107-1.7678-.5858c-.4245-.3396-.6806-.7888-.7252-1.2644-.0077-.0825.0602-.1498.143-.1498h4.7Z"
            />
        </svg>
    );
}
export default BellDuotoneLine;
