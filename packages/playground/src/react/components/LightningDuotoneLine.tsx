import React, { SVGProps } from "react";

export function LightningDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                d="m9.5556 13.3232-.1198-.0109c-1.5278-.1388-2.2917-.2083-2.5343-.7309-.2427-.5226.1972-1.151 1.077-2.4078l3.5827-5.1182c.5812-.8302.8718-1.2454 1.1224-1.157.2506.0882.2169.5938.1495 1.605l-.2032 3.0485c-.0614.9202-.092 1.3803.1724 1.69.2644.3096.7236.3514 1.6421.4349l.1198.0109c1.5278.1388 2.2917.2083 2.5343.7309.2427.5226-.1972 1.151-1.077 2.4078l-3.5827 5.1182c-.5812.8302-.8718 1.2454-1.1224 1.1571-.2506-.0883-.2169-.5939-.1495-1.6051l.2032-3.0485c.0614-.9202.092-1.3803-.1724-1.69-.2644-.3096-.7236-.3514-1.642-.4349Z"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M18.5 4 17 6h2l-1.5 2m-11 8L5 18h2l-1.5 2"
                strokeLinejoin="round"
                strokeOpacity=".24"
            />
        </svg>
    );
}
export default LightningDuotoneLine;
