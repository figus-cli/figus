import React, { SVGProps } from "react";

export function FlagFinish(props: SVGProps<SVGSVGElement>) {
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
                d="M6 13V5.5c0-.2357 0-.3536.0732-.4268C6.1464 5 6.2643 5 6.5 5h3.882c.3007 0 .451 0 .5718.0747.1209.0747.1881.2091.3226.478l.4472.8945c.1345.269.2017.4035.3226.4781C12.167 7 12.3173 7 12.618 7H17.5c.2357 0 .3536 0 .4268.0732C18 7.1464 18 7.2643 18 7.5v7c0 .2357 0 .3536-.0732.4268C17.8536 15 17.7357 15 17.5 15h-4.882c-.3007 0-.451 0-.5718-.0747-.1209-.0746-.1881-.2091-.3226-.4781l-.4472-.8944c-.1345-.269-.2017-.4035-.3226-.4781C10.833 13 10.6827 13 10.382 13H6Zm0 0v6"
            />
        </svg>
    );
}
export default FlagFinish;
