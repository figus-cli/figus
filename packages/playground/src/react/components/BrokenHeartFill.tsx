import React, { SVGProps } from "react";

export function BrokenHeartFill(props: SVGProps<SVGSVGElement>) {
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
                d="M10.0558 4.231 8 8l4.5 4.4999-1 2.5 3.5-3-4-4 1.3513-1.6867a.5663.5663 0 0 0 .1737-.23c1.3398-3.19 5.6066-3.7808 7.7629-1.075l.3882.4873c1.8559 2.329 1.5389 5.7082-.7177 7.6514l-7.3903 6.3639c-.2294.1975-.3441.2963-.4767.3209a.4971.4971 0 0 1-.1828 0c-.1327-.0246-.2474-.1234-.4767-.3209l-7.3903-6.3639C1.785 11.2037 1.468 7.8244 3.3239 5.4955l.3882-.4872c1.6334-2.0497 4.4778-2.2077 6.3437-.7772Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default BrokenHeartFill;
