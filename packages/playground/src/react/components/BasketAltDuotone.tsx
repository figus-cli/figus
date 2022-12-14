import React, { SVGProps } from "react";

export function BasketAltDuotone(props: SVGProps<SVGSVGElement>) {
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
                d="M20 10H4c-.5523 0-1-.4477-1-1s.4477-1 1-1h16c.5523 0 1 .4477 1 1s-.4477 1-1 1ZM6.8023 18.2209l-.6046-5.4418C6.085 11.7663 5.229 11 4.2099 11h15.5802c-1.0191 0-1.8752.7663-1.9878 1.7791l-.6046 5.4418C17.0851 19.2337 16.229 20 15.2099 20H8.7901c-1.0191 0-1.8752-.7663-1.9878-1.7791Z"
                fillOpacity=".24"
            />
            <path
                stroke="currentColor"
                d="m8.5 3.5-2 3m9-3 2 3m-7 10-1-3m4 3 1-3"
            />
        </svg>
    );
}
export default BasketAltDuotone;
