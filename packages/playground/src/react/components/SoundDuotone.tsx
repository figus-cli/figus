import React, { SVGProps } from "react";

export function SoundDuotone(props: SVGProps<SVGSVGElement>) {
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
                d="M13 8v-.6115c0-1.6183 0-2.4275.474-2.987.4739-.5595 1.2721-.6925 2.8684-.9586l2.3567-.3927c.1358-.0227.2037-.034.2404.0057.0366.0397.0199.1065-.0135.24l-.8953 3.5813c-.0149.0597-.0224.0895-.0434.1095-.0209.02-.0511.026-.1114.0381L13 8v8.7531c0 1.8549-1.3812 3.4196-3.2218 3.6496l-.5576.0697c-2.1256.2657-3.922-1.5625-3.619-3.6831C5.8301 15.1888 7.2008 14 8.8175 14H13V8Z"
                fillOpacity=".24"
            />
            <path
                stroke="currentColor"
                d="M13 14H8.8176c-1.6167 0-2.9874 1.1888-3.216 2.7893-.303 2.1206 1.4934 3.9488 3.619 3.6831l.5576-.0697C11.6188 20.1727 13 18.608 13 16.7531V7.3885c0-1.6183 0-2.4275.474-2.987.4739-.5595 1.2721-.6925 2.8684-.9586l2.3567-.3927c.1358-.0227.2037-.034.2404.0057.0366.0397.0199.1065-.0135.24l-.8953 3.5813c-.0149.0597-.0224.0895-.0434.1095-.0209.02-.0511.026-.1114.0381L13 8"
                strokeWidth="1.2"
            />
        </svg>
    );
}
export default SoundDuotone;