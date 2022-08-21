import React, { SVGProps } from "react";

export function RoadAlt(props: SVGProps<SVGSVGElement>) {
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
                d="m9.0956 20.7929 2.8318-6.1355c.0231-.0501.0346-.0752.0506-.083a.05.05 0 0 1 .044 0c.016.0078.0275.0329.0506.083l2.8318 6.1355c.0293.0635.044.0953.0381.1138a.0497.0497 0 0 1-.034.0329c-.0186.0053-.0499-.0103-.1125-.0416l-2.7602-1.3801a.1028.1028 0 0 0-.0266-.0111.0475.0475 0 0 0-.0184 0 .1028.1028 0 0 0-.0266.0111L9.204 20.898c-.0626.0313-.0939.0469-.1125.0416a.0497.0497 0 0 1-.034-.0329c-.0059-.0185.0088-.0503.038-.1138ZM4 18 7 4m13 14L17 4m-5 7V9m0-3V4"
            />
        </svg>
    );
}
export default RoadAlt;
