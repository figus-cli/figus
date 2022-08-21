import React, { SVGProps } from "react";

export function BagDuotone(props: SVGProps<SVGSVGElement>) {
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
                d="M4.858 9.8466c.0673-.876.101-1.314.3886-1.5803C5.534 8 5.9734 8 6.852 8h10.2958c.8787 0 1.318 0 1.6055.2663.2876.2663.3213.7043.3886 1.5803l.2444 3.177c.2631 3.4198.3946 5.1298-.4624 6.3173a3.9995 3.9995 0 0 1-.6608.7135C17.1449 21 15.43 21 12 21s-5.145 0-6.2632-.9456a4.0016 4.0016 0 0 1-.6608-.7135c-.857-1.1875-.7255-2.8975-.4624-6.3173l.2443-3.177Z"
                fillOpacity=".24"
            />
            <path
                stroke="currentColor"
                d="M8.5 8V6.5C8.5 4.567 10.067 3 12 3s3.5 1.567 3.5 3.5V8"
            />
            <path
                fill="currentColor"
                d="M8 11.5a.5.5 0 0 0 1 0H8Zm1 0V10H8v1.5h1Zm6 0a.5.5 0 0 0 1 0h-1Zm1 0V10h-1v1.5h1Z"
            />
        </svg>
    );
}
export default BagDuotone;
