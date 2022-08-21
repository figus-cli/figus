import React, { SVGProps } from "react";

export function BasketAlt(props: SVGProps<SVGSVGElement>) {
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
                d="M10 16v-1M8 4 6 7m10-3 2 3m-4 9v-1m-9-4c.5693 0 1.0476.4281 1.1104.9939l.4942 4.4478c.188 1.6925.2821 2.5388.8516 3.0486C8.0258 20 8.8772 20 10.5802 20h2.8396c1.703 0 2.5544 0 3.124-.5097.5695-.5098.6635-1.356.8516-3.0486l.4942-4.4478A1.1172 1.1172 0 0 1 19 11m0 0H5c-1.1046 0-2-.8954-2-2s.8954-2 2-2h14c1.1046 0 2 .8954 2 2s-.8954 2-2 2Z"
                strokeWidth="2"
            />
        </svg>
    );
}
export default BasketAlt;
