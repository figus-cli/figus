import React, { SVGProps } from "react";

export function SortArrow(props: SVGProps<SVGSVGElement>) {
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
                d="m8 2-.7071-.7071L8 .5858l.7071.707L8 2Zm1 15c0 .5523-.4477 1-1 1s-1-.4477-1-1h2ZM2.2929 6.2929l5-5L8.707 2.707l-5 5-1.414-1.414Zm6.4142-5 5 5-1.4142 1.4142-5-5L8.707 1.293ZM9 2v15H7V2h2Zm7 20-.7071.7071.7071.7071.7071-.7071L16 22Zm1-15c0-.5523-.4477-1-1-1s-1 .4477-1 1h2Zm-6.7071 10.7071 5 5 1.4142-1.4142-5-5-1.4142 1.4142Zm6.4142 5 5-5-1.4142-1.4142-5 5 1.4142 1.4142ZM17 22V7h-2v15h2Z"
            />
        </svg>
    );
}
export default SortArrow;
