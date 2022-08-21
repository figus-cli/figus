import React, { SVGProps } from "react";

export function StackframeLight(props: SVGProps<SVGSVGElement>) {
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
                d="M5 8c0-.9428 0-1.4142.2929-1.7071C5.5858 6 6.0572 6 7 6h6.0633c.4606 0 .6909 0 .8925.0944s.349.2714.6439.6252l3.3333 4c.5102.6122.7653.9184.7653 1.2804s-.2551.6682-.7653 1.2804l-3.3333 4c-.2949.3538-.4423.5308-.6439.6252-.2016.0944-.4319.0944-.8925.0944H7c-.9428 0-1.4142 0-1.7071-.2929C5 17.4142 5 16.9428 5 16V8Z"
            />
        </svg>
    );
}
export default StackframeLight;
