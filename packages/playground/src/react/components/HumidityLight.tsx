import React, { SVGProps } from "react";

export function HumidityLight(props: SVGProps<SVGSVGElement>) {
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
                d="M12 21.5c4.1012 0 7.5-3.0628 7.5-6.9286 0-2.4159-1.2328-4.859-2.6268-6.8623-1.4034-2.017-3.0217-3.6609-3.8954-4.4913a1.4126 1.4126 0 0 0-1.9556 0c-.8737.8304-2.492 2.4743-3.8954 4.4913C5.7328 9.7125 4.5 12.1555 4.5 14.5714 4.5 18.4372 7.8988 21.5 12 21.5Z"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M12 18a4.0001 4.0001 0 0 1-4-4"
            />
        </svg>
    );
}
export default HumidityLight;
