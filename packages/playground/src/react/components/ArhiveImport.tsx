import React, { SVGProps } from "react";

export function ArhiveImport(props: SVGProps<SVGSVGElement>) {
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
                d="M3 11c0 .9319 0 1.3978.1522 1.7654.203.49.5924.8794 1.0824 1.0824C4.6022 14 5.0681 14 6 14h.6754c.581 0 .8716 0 1.1035.1338a.9945.9945 0 0 1 .1641.1183c.2003.1777.2921.4533.4759 1.0045l.1252.3759c.22.66.33.99.592 1.1787C9.3978 17 9.7457 17 10.4414 17h3.117c.6957 0 1.0436 0 1.3055-.1888.2618-.1887.3718-.5187.5918-1.1787l.1253-.3759c.1838-.5512.2756-.8268.4759-1.0045a.9895.9895 0 0 1 .1641-.1183C16.453 14 16.7435 14 17.3246 14H18c.9319 0 1.3978 0 1.7654-.1522.49-.203.8794-.5924 1.0824-1.0824C21 12.3978 21 11.9319 21 11M8.5 9.5 12 12m0 0 3.5-2.5M12 12V6"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M21 19V5c0-1.1046-.8954-2-2-2H5c-1.1046 0-2 .8954-2 2v14c0 1.1046.8954 2 2 2h14c1.1046 0 2-.8954 2-2Z"
            />
        </svg>
    );
}
export default ArhiveImport;
