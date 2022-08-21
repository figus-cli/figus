import React, { SVGProps } from "react";

export function CreditcardLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                stroke="currentColor"
                d="M3.5 9.398c0-1.025 0-1.5376.2027-1.9277a1.8 1.8 0 0 1 .7675-.7676C4.8605 6.5 5.373 6.5 6.398 6.5h11.204c1.0251 0 1.5376 0 1.9278.2027.3287.1707.5968.4388.7675.7675.2027.3902.2027.9027.2027 1.9278v6.204c0 1.0251 0 1.5376-.2027 1.9278a1.7994 1.7994 0 0 1-.7675.7675c-.3902.2027-.9027.2027-1.9278.2027H6.398c-1.025 0-1.5376 0-1.9277-.2027a1.7996 1.7996 0 0 1-.7676-.7675C3.5 17.1396 3.5 16.6271 3.5 15.602V9.398Z"
            />
            <path stroke="currentColor" d="M3.5 10.5h17" />
            <circle cx="6.5" cy="15.5" r=".5" fill="currentColor" />
        </svg>
    );
}
export default CreditcardLight;
