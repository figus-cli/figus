import React, { SVGProps } from "react";

export function TimeAtackFill(props: SVGProps<SVGSVGElement>) {
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
                d="M12 21c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9Zm.0796-15.9323C12 5.1418 12 5.2612 12 5.5v6.2113c0 .1409 0 .2113-.0335.2694-.0335.058-.0945.0932-.2165.1636L6.3708 15.25c-.2068.1194-.3102.1791-.3346.2851-.0244.1061.0394.2003.1669.3886A7.0003 7.0003 0 0 0 12 19a6.9995 6.9995 0 0 0 6.0622-3.5 6.9995 6.9995 0 0 0 0-7 7.0005 7.0005 0 0 0-5.5626-3.4821c-.2269-.0163-.3403-.0244-.42.0498Z"
            />
        </svg>
    );
}
export default TimeAtackFill;
