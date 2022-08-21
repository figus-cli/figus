import React, { SVGProps } from "react";

export function ImgFill(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="18" cy="7" r="1" stroke="currentColor" />
            <path
                fill="currentColor"
                d="M5.186 18h9.628c.9469 0 1.5208-1.0454 1.0124-1.8443l-4.814-7.5648c-.4716-.741-1.5533-.741-2.0248 0l-4.814 7.5648C3.6652 16.9546 4.2391 18 5.186 18Z"
            />
            <path
                fill="currentColor"
                d="M12.2422 18h7.5156c.9584 0 1.5301-1.0682.9984-1.8656l-3.7577-5.6367c-.475-.7125-1.522-.7125-1.997 0l-3.7577 5.6367c-.5317.7974.04 1.8656.9984 1.8656Z"
            />
        </svg>
    );
}
export default ImgFill;
