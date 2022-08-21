import React, { SVGProps } from "react";

export function Favorites(props: SVGProps<SVGSVGElement>) {
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
                d="M20 11.5c0 5.0681-5.9718 8.4702-7.5963 9.3018a.875.875 0 0 1-.8074 0C9.9718 19.9702 4 16.5681 4 11.5 4 7 7.8763 4 12 4c4.2667 0 8 3 8 7.5Z"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="m8.9701 11.8107 2.7986 2.9458c.0927.0976.1391.1464.1954.1577a.1808.1808 0 0 0 .0718 0c.0563-.0113.1027-.0601.1954-.1577l2.7986-2.9458a1.8069 1.8069 0 0 0 .2164-2.2112c-.7378-1.165-2.4564-1.1073-3.1143.1047l-.0696.1283a.071.071 0 0 1-.1248 0l-.0696-.1283c-.6579-1.212-2.3765-1.2698-3.1143-.1047a1.8069 1.8069 0 0 0 .2164 2.2112Z"
            />
        </svg>
    );
}
export default Favorites;
