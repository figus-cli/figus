import React, { SVGProps } from "react";

export function NavigateLight(props: SVGProps<SVGSVGElement>) {
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
                d="m4.5456 19.4028 7.4091-15.8062a.05.05 0 0 1 .0906 0l7.4091 15.8062a.05.05 0 0 1-.0581.0695l-7.3834-1.9689a.0513.0513 0 0 0-.0258 0l-7.3834 1.9689a.05.05 0 0 1-.0581-.0695Z"
            />
            <path
                fill="currentColor"
                d="m11.9752 12.4858.2481-.4341-.2481.4341Zm.0496 0-.2481-.4341.2481.4341Zm-3.7729-1.5517 3.4752 1.9858.4962-.8682-3.4752-1.9858-.4962.8682Zm4.021 1.9858 3.4752-1.9858-.4962-.8682-3.4752 1.9858.4962.8682Zm-.5458 0a.5497.5497 0 0 0 .5458 0l-.4962-.8682a.45.45 0 0 1 .4466 0l-.4962.8682Z"
            />
        </svg>
    );
}
export default NavigateLight;
