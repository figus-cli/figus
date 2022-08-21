import React, { SVGProps } from "react";

export function ImgLoadBoxDuotoneLine(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <mask
                id="a"
                width="18"
                height="18"
                x="3"
                y="3"
                maskUnits="userSpaceOnUse"
                style="mask-type:alpha"
            >
                <path
                    fill="currentColor"
                    d="M3 11c0-3.7712 0-5.6569 1.1716-6.8284C5.343 3 7.2288 3 11 3h2c3.7712 0 5.6569 0 6.8284 1.1716C21 5.343 21 7.2288 21 11v2c0 3.7712 0 5.6569-1.1716 6.8284C18.6569 21 16.7712 21 13 21h-2c-3.7712 0-5.6569 0-6.8284-1.1716C3 18.6569 3 16.7712 3 13v-2Z"
                />
            </mask>
            <g mask="url(#a)">
                <path
                    fill="currentColor"
                    stroke="currentColor"
                    d="M12.8982 14.788 4.3098 5.3407A1.041 1.041 0 0 0 3.5395 5C2.2257 5 1.2404 3.798 1.498 2.5098L1.897.5146C2.2478-1.2383 3.7868-2.5 5.5744-2.5h8.7179c3.8606 0 5.7909 0 6.9684 1.208 1.1774 1.2081 1.128 3.1378 1.029 6.997L22 17l-3.8227-3.1856c-.2148-.179-.3222-.2684-.4142-.3293-.9281-.6141-2.179-.3524-2.7832.5822-.0599.0926-.1224.2176-.2474.4677-.0709.1419-.1064.2128-.1391.2624-.3325.5049-1.0335.6016-1.4902.2056-.0449-.0389-.0983-.0976-.205-.215Z"
                    fillOpacity=".24"
                    strokeWidth="1.2"
                />
            </g>
            <path
                stroke="currentColor"
                d="M3 13v-2c0-3.7712 0-5.6569 1.1716-6.8284C5.343 3 7.2288 3 11 3h2c3.7712 0 5.6569 0 6.8284 1.1716C21 5.343 21 7.2288 21 11v2c0 3.7712 0 5.6569-1.1716 6.8284C18.6569 21 16.7712 21 13 21h-1"
                strokeWidth="1.2"
            />
            <circle cx="16.5" cy="7.5" r="1.5" fill="currentColor" />
            <path
                fill="currentColor"
                d="M8 16v-.6h.6v.6H8Zm-4.6252 4.4685a.6.6 0 1 1-.7496-.937l.7496.937ZM7.4 21v-5h1.2v5H7.4Zm.6-4.4H3v-1.2h5v1.2Zm.3748-.1315-5 4-.7496-.937 5-4 .7496.937Z"
            />
        </svg>
    );
}
export default ImgLoadBoxDuotoneLine;
