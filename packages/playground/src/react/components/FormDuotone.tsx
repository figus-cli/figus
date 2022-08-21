import React, { SVGProps } from "react";

export function FormDuotone(props: SVGProps<SVGSVGElement>) {
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
                d="M5.2929 5.2929C5 5.5858 5 6.0572 5 7v10c0 1.8856 0 2.8284.5858 3.4142.3266.3266.7641.4711 1.4142.5351V19.5c0-.8284.6716-1.5 1.5-1.5s1.5.6716 1.5 1.5V21h4v-1.5c0-.8284.6716-1.5 1.5-1.5s1.5.6716 1.5 1.5v1.4493c.6501-.064 1.0876-.2085 1.4142-.5351C19 19.8284 19 18.8856 19 17V7c0-.9428 0-1.4142-.2929-1.7071C18.4142 5 17.9428 5 17 5H7c-.9428 0-1.4142 0-1.7071.2929Z"
                clipRule="evenodd"
                fillOpacity=".24"
                fillRule="evenodd"
            />
            <path stroke="currentColor" d="M8.5 9.5h7m-7 3h4m-4 3h6" />
            <path
                fill="currentColor"
                d="M16 19.5a.5.5 0 0 0-1 0h1Zm-1 0V21h1v-1.5h-1Zm-6 0a.5.5 0 0 0-1 0h1Zm-1 0V21h1v-1.5H8Z"
            />
        </svg>
    );
}
export default FormDuotone;
