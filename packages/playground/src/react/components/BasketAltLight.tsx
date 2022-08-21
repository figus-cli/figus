import React, { SVGProps } from "react";

export function BasketAltLight(props: SVGProps<SVGSVGElement>) {
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
                d="m10.5 15.5-1-3.5m-1-5.5-2 3m9-3 2 3m-4 6 1-3.5m-10-2.5c.5843 0 1.0902.4058 1.217.9762l1.087 4.8915c.3336 1.5017.5005 2.2525 1.0489 2.6924.5484.4399 1.3175.4399 2.8558.4399h2.5826c1.5383 0 2.3074 0 2.8558-.4399s.7153-1.1907 1.049-2.6924l1.087-4.8915A1.2465 1.2465 0 0 1 19.5 9.5m-16 0h17"
            />
        </svg>
    );
}
export default BasketAltLight;
