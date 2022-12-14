import React, { SVGProps } from "react";

export function FavoritesFill(props: SVGProps<SVGSVGElement>) {
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
                d="M12.4037 20.8018C14.0282 19.9702 20 16.5681 20 11.5 20 7 16.2667 4 12 4c-4.1237 0-8 3-8 7.5 0 5.0681 5.9718 8.4702 7.5963 9.3018a.875.875 0 0 0 .8074 0Zm-.635-6.0453-2.7986-2.9458a1.8069 1.8069 0 0 1-.2165-2.2112c.738-1.165 2.4565-1.1073 3.1144.1047l.0696.1283a.071.071 0 0 0 .1248 0l.0696-.1283c.6579-1.212 2.3765-1.2698 3.1143-.1047a1.8069 1.8069 0 0 1-.2164 2.2112l-2.7986 2.9458c-.0927.0976-.1391.1464-.1954.1577a.1808.1808 0 0 1-.0718 0c-.0563-.0113-.1027-.0601-.1954-.1577Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default FavoritesFill;
