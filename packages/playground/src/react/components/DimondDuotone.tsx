import React, { SVGProps } from "react";

export function DimondDuotone(props: SVGProps<SVGSVGElement>) {
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
                d="m4.874 12.874 5.7118 5.7118c.6667.6667 1 1 1.4142 1 .4142 0 .7475-.3333 1.4142-1l5.7118-5.7118c.4252-.4252.6379-.6379.7031-.9143.0653-.2765-.0298-.5618-.22-1.1323l-.6974-2.0923c-.44-1.32-.66-1.98-1.1838-2.3576C17.2041 6 16.5084 6 15.117 6H8.883c-1.3914 0-2.0871 0-2.6109.3775S5.5283 7.415 5.0883 8.7351l-.6974 2.0923c-.1902.5705-.2853.8558-.22 1.1323.0652.2764.2779.4891.7031.9143Z"
            />
        </svg>
    );
}
export default DimondDuotone;
