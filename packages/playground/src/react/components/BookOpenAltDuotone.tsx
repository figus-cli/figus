import React, { SVGProps } from "react";

export function BookOpenAltDuotone(props: SVGProps<SVGSVGElement>) {
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
                d="M12 19V6s-1-2-4.5-2S3 6 3 6v13s1-2 4.5-2 4.5 2 4.5 2Z"
                fillOpacity=".24"
            />
            <mask
                id="a"
                width="9"
                height="15"
                x="3"
                y="4"
                maskUnits="userSpaceOnUse"
                style="mask-type:alpha"
            >
                <path
                    fill="currentColor"
                    d="M12 19V6s-1-2-4.5-2S3 6 3 6v13s1-2 4.5-2 4.5 2 4.5 2Z"
                />
            </mask>
            <g mask="url(#a)">
                <path
                    fill="currentColor"
                    d="M5 4.15A.15.15 0 0 1 5.15 4h2.7a.15.15 0 0 1 .15.15v4.2464c0 .2228-.2693.3343-.4268.1768l-.8964-.8964a.25.25 0 0 0-.3536 0l-.8964.8964C5.2693 8.7307 5 8.6192 5 8.3964V4.15Z"
                />
            </g>
            <path
                fill="currentColor"
                d="M13 19V6s.8889-2 4-2 4 2 4 2v13s-.8889-2-4-2-4 2-4 2Z"
            />
        </svg>
    );
}
export default BookOpenAltDuotone;
