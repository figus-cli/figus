import React, { SVGProps } from "react";

export function SignOut(props: SVGProps<SVGSVGElement>) {
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
                d="M21.9506 11h-9.5364l3.2929-3.2929-1.4142-1.4142-5 5L8.5858 12l.707.7071 5.0001 5 1.4142-1.4142L12.4142 13h9.5364c-.5017 5.0533-4.7653 9-9.9506 9-5.5229 0-10-4.4772-10-10C2 6.4771 6.4771 2 12 2c5.1853 0 9.4489 3.9467 9.9506 9Z"
            />
        </svg>
    );
}
export default SignOut;
