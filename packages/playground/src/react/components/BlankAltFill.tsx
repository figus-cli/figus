import React, { SVGProps } from "react";

export function BlankAltFill(props: SVGProps<SVGSVGElement>) {
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
                d="M7 2C5.3431 2 4 3.3432 4 5v14c0 1.6569 1.3431 3 3 3h4v-5.0616c-.0001-.6541-.0001-1.2419.0638-1.7176.0699-.5193.232-1.0521.6684-1.4886.4365-.4364.9693-.5985 1.4886-.6684.4758-.0639 1.0635-.0639 1.7176-.0638H20V5c0-1.6568-1.3431-3-3-3H7Zm12.7305 13H15c-.7354 0-1.1863.0021-1.5127.046-.2868.0386-.3347.0934-.3404.0999l-.0005.0005-.0005.0005c-.0065.0057-.0613.0536-.0999.3404-.0439.3264-.046.7773-.046 1.5127v4.7305a2.9984 2.9984 0 0 0 .8787-.6092l5.2426-5.2426A2.9984 2.9984 0 0 0 19.7305 15Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default BlankAltFill;
