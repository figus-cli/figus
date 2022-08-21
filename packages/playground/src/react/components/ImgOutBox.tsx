import React, { SVGProps } from "react";

export function ImgOutBox(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                stroke="currentColor"
                d="M21 11v2c0 3.7712 0 5.6569-1.1716 6.8284C18.6569 21 16.7712 21 13 21h-2c-3.7712 0-5.6569 0-6.8284-1.1716C3 18.6569 3 16.7712 3 13v-2c0-3.7712 0-5.6569 1.1716-6.8284C5.343 3 7.2288 3 11 3h1"
            />
            <path
                fill="currentColor"
                d="m18.9997 13.5854-.2428-.2429-.0147-.0146c-.0637-.0637-.1173-.1173-.1645-.1607-1.4301-1.3141-3.7128-.9436-4.654.7552a5.6888 5.6888 0 0 0-.1052.2044l-.0093.0186-.0282.0562-.0019.0038-.0028-.0032-.041-.0477-4.976-5.8054c-.3595-.4193-.9908-.4679-1.41-.1085-.4194.3595-.468.9908-.1086 1.41l4.9761 5.8055.0088.0103c.0289.0337.0628.0733.0937.1063.9267.9895 2.5486.7899 3.2076-.3949a3.2694 3.2694 0 0 0 .0651-.1258l.006-.0121c.0548-.1095.0676-.1347.0752-.1483.3137-.5663 1.0746-.6897 1.5513-.2517.0114.0105.0316.0303.1181.1169l1.6015 1.6014c.0461-.7178.0542-1.6102.0556-2.7728Z"
            />
            <path
                fill="currentColor"
                d="M21 3V2h1v1h-1Zm-4.3753 4.7809c-.4313.345-1.0606.275-1.4056-.1562-.345-.4313-.2751-1.0606.1562-1.4056l1.2494 1.5618ZM20 8V3h2v5h-2Zm1-4h-5V2h5v2Zm.6247-.2191-5 4-1.2494-1.5618 5-4 1.2494 1.5618Z"
            />
        </svg>
    );
}
export default ImgOutBox;
