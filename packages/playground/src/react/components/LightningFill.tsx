import React, { SVGProps } from "react";

export function LightningFill(props: SVGProps<SVGSVGElement>) {
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
                d="M11.5 13.8h-1.3701c-1.4085 0-2.1127 0-2.4076-.4615-.295-.4616.001-1.1006.5926-2.3788l2.7314-5.8996c.3742-.8083.5612-1.2124.7575-1.1692C12 3.9341 12 4.3795 12 5.2701V9.7c0 .2357 0 .3536.0732.4268.0732.0732.1911.0732.4268.0732h1.3701c1.4085 0 2.1127 0 2.4076.4615.2949.4616-.0009 1.1006-.5926 2.3787l-2.7314 5.8997c-.3742.8083-.5612 1.2124-.7575 1.1692C12 20.0659 12 19.6205 12 18.7299V14.3c0-.2357 0-.3536-.0732-.4268-.0732-.0732-.1911-.0732-.4268-.0732Z"
            />
        </svg>
    );
}
export default LightningFill;