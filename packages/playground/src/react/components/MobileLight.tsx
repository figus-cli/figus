import React, { SVGProps } from "react";

export function MobileLight(props: SVGProps<SVGSVGElement>) {
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
                d="M7.2322 3.2322c-.4012.4013-.5738.9066-.6545 1.5066C6.5 5.3168 6.5 6.0517 6.5 6.9634v10.0732c0 .9117 0 1.6466.0777 2.2246.0807.6.2533 1.1053.6545 1.5066.4013.4012.9066.5738 1.5066.6545.578.0777 1.3129.0777 2.2246.0777h2.0732c.9117 0 1.6466 0 2.2246-.0777.6-.0807 1.1053-.2533 1.5066-.6545.4012-.4013.5738-.9066.6545-1.5066.0777-.578.0777-1.3129.0777-2.2246V6.9634c0-.9117 0-1.6466-.0777-2.2246-.0807-.6-.2533-1.1053-.6545-1.5066-.4013-.4012-.9066-.5738-1.5066-.6545C14.6832 2.5 13.9483 2.5 13.0366 2.5h-2.0732c-.9117 0-1.6466 0-2.2246.0777-.6.0807-1.1053.2533-1.5066.6545ZM7 16h10"
            />
        </svg>
    );
}
export default MobileLight;
