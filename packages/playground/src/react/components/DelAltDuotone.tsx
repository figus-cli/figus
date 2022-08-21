import React, { SVGProps } from "react";

export function DelAltDuotone(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <ellipse cx="12" cy="7" fill="currentColor" rx="7" ry="3" />
            <path
                fill="currentColor"
                d="M12 9.9995c3.3357 0 6.1265-1 6.8293-2.3386.0114-.0218.0616-.0067.0575.0176l-1.7744 10.6464a1.7872 1.7872 0 0 1-.6464 1.1018c-2.611 2.0888-6.321 2.0888-8.932 0a1.787 1.787 0 0 1-.6464-1.1018L5.1132 7.6785c-.0041-.0243.046-.0394.0575-.0176C5.8735 8.9996 8.6643 9.9995 12 9.9995Z"
            />
        </svg>
    );
}
export default DelAltDuotone;
