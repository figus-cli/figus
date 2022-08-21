import React, { SVGProps } from "react";

export function DesktopLight(props: SVGProps<SVGSVGElement>) {
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
                d="M3.5 8c0-.957.001-1.6243.0688-2.128.0657-.4891.186-.7481.3705-.9327.1846-.1845.4436-.3048.9328-.3705C5.3757 4.501 6.043 4.5 7 4.5h10c.9569 0 1.6244.001 2.1279.0688.4892.0657.7483.186.9328.3705s.3048.4436.3705.9328C20.4989 6.3757 20.5 7.043 20.5 8v8.5h-17V8Zm.1667 8.5c-.6444 0-1.1667.5223-1.1667 1.1667 0 1.0125.8208 1.8333 1.8333 1.8333h15.3334c1.0125 0 1.8333-.8208 1.8333-1.8333 0-.6444-.5223-1.1667-1.1667-1.1667H3.6667Z"
            />
        </svg>
    );
}
export default DesktopLight;
