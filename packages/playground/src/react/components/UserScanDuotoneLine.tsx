import React, { SVGProps } from "react";

export function UserScanDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                stroke="currentColor"
                d="M17.5 3.5h.2c1.7913 0 2.687 0 3.2435.5565C21.5 4.613 21.5 5.5087 21.5 7.3v.2m-4 13h.2c1.7913 0 2.687 0 3.2435-.5565.5565-.5565.5565-1.4522.5565-3.2435v-.2m-15-13h-.2c-1.7913 0-2.687 0-3.2435.5565C2.5 4.613 2.5 5.5087 2.5 7.3v.2m4 13h-.2c-1.7913 0-2.687 0-3.2435-.5565C2.5 19.387 2.5 18.4913 2.5 16.7v-.2"
                strokeOpacity=".24"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M7.2148 15.7847c.4728-.6823 1.1603-1.2593 2.002-1.6643.8417-.4049 1.8019-.6204 2.7832-.6204.9813 0 1.9415.2155 2.7832.6204.8417.405 1.5292.982 2.002 1.6643"
            />
            <circle cx="12" cy="9" r="2.5" stroke="currentColor" />
        </svg>
    );
}
export default UserScanDuotoneLine;
