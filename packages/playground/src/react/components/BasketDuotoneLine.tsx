import React, { SVGProps } from "react";

export function BasketDuotoneLine(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path stroke="currentColor" d="M12 5V3m-2 13-.5-3m4.4999 3 .5-3" />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M2 9h20c-1.2667 0-1.9 0-2.3839.2997a1.9999 1.9999 0 0 0-.4315.36c-.3814.4225-.4947 1.0457-.7213 2.2919l-.8661 4.7639c-.2855 1.5704-.4283 2.3555-.9849 2.82C16.0558 20 15.2577 20 13.6617 20h-3.3234c-1.596 0-2.394 0-2.9506-.4645s-.6994-1.2496-.9849-2.82l-.8661-4.7639c-.2266-1.2462-.34-1.8694-.7213-2.2918a2 2 0 0 0-.4315-.3601C3.9 9 3.2667 9 2 9Z"
            />
        </svg>
    );
}
export default BasketDuotoneLine;
