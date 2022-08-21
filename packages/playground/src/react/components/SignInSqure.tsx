import React, { SVGProps } from "react";

export function SignInSqure(props: SVGProps<SVGSVGElement>) {
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
                d="M7 7.132v-.52c0-2.1459 0-3.2188.6896-3.8169.6896-.598 1.7518-.4463 3.8761-.1429l4.2828.6119c2.4562.3508 3.6842.5263 4.4179 1.3722C21 5.4822 21 6.7227 21 9.2038v5.5924c0 2.4811 0 3.7216-.7336 4.5675-.7337.8459-1.9617 1.0213-4.4179 1.3722l-4.2828.6119c-2.1243.3034-3.1865.4552-3.8761-.1429S7 19.5339 7 17.388v-.322"
            />
            <path
                fill="currentColor"
                d="m16 12 .7809-.6247.4997.6247-.4997.6247L16 12ZM4 13c-.5523 0-1-.4477-1-1s.4477-1 1-1v2Zm8.7809-6.6247 4 5-1.5618 1.2494-4-5 1.5618-1.2494Zm4 6.2494-4 5-1.5618-1.2494 4-5 1.5618 1.2494ZM16 13H4v-2h12v2Z"
            />
        </svg>
    );
}
export default SignInSqure;
