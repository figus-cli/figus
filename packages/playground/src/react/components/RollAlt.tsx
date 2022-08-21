import React, { SVGProps } from "react";

export function RollAlt(props: SVGProps<SVGSVGElement>) {
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
                d="M5 16c.7099 0 1.0999-.5513 1.2501-.8055.1898-.3211.326-.7192.4272-1.1235C6.8833 13.247 7 12.1617 7 11c0-1.1617-.1168-2.247-.3228-3.071-.101-.4043-.2373-.8024-.427-1.1235C6.0998 6.5513 5.7098 6 5 6s-1.0999.5513-1.2501.8055c-.1898.3211-.326.7192-.4271 1.1235C3.1168 8.753 3 9.8383 3 11c0 1.1617.1168 2.247.3228 3.071.101.4043.2373.8024.427 1.1235C3.9002 15.4487 4.2902 16 5 16Z"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M19 16c.6929 0 1.0822-.5282 1.2388-.7878.1933-.3202.3334-.7212.4384-1.1412C20.8904 13.2183 21 12.1147 21 11c0-1.1147-.1096-2.2183-.3228-3.071-.105-.42-.2451-.821-.4384-1.1413C20.0822 6.5282 19.6929 6 19 6m0 0s-3.0625 1-7 1-7-1-7-1m0 10s1.4413-.7644 4.5-1m9.5 1s-1.4413-.7644-4.5-1M10 8v2m4-2v2"
            />
            <circle cx="12" cy="13" r="3" stroke="currentColor" />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M9.5 15 6 18l2 .5L9.5 20l2.5-4 2.5 4 1.5-1.5 2-.5-3.5-3"
            />
        </svg>
    );
}
export default RollAlt;
