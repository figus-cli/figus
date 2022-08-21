import React, { SVGProps } from "react";

export function FlagAlt(props: SVGProps<SVGSVGElement>) {
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
                d="M6 15V5.5c0-.2357 0-.3536.0732-.4268C6.1464 5 6.2643 5 6.5 5h10.2929c.5137 0 .7706 0 .8345.1543.0639.1544-.1177.336-.481.6993l-3.8636 3.8636c-.1333.1333-.2.2-.2.2828 0 .0828.0667.1495.2.2828l3.8636 3.8636c.3633.3633.5449.5449.481.6993-.0639.1543-.3208.1543-.8345.1543H6Zm0 0v4"
            />
        </svg>
    );
}
export default FlagAlt;
