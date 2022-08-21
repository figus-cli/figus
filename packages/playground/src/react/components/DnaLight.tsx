import React, { SVGProps } from "react";

export function DnaLight(props: SVGProps<SVGSVGElement>) {
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
                d="m19.5 3.5-.2822 2.5398C18.8092 9.7176 15.7005 12.5 12 12.5c-3.7005 0-6.8092 2.7824-7.2178 6.4602L4.5 21.5"
                strokeLinejoin="round"
            />
            <path
                fill="currentColor"
                d="M4.997 3.4448a.5.5 0 1 0-.994.1104l.994-.1104Zm-.2148 2.595.497-.0553-.497.0553Zm14.4356 12.9204-.4969.0553.4969-.0553Zm-.2147 2.595a.5.5 0 1 0 .9938-.1104l-.9938.1104ZM12 12a.5.5 0 0 0 0 1v-1Zm-4.489-.4295a.5.5 0 1 0 .5786-.8156l-.5787.8156ZM4.003 3.5552l.2822 2.5398.994-.1105-.2823-2.5397-.9938.1104Zm14.718 15.4603.2822 2.5397.9938-.1104-.2822-2.5398-.9938.1105ZM12 13c3.4457 0 6.3404 2.5908 6.7209 6.0155l.9938-.1105C19.278 14.974 15.9552 12 12 12v1ZM4.2852 6.095c.253 2.2771 1.4749 4.2332 3.2257 5.4755l.5787-.8156c-1.5267-1.0832-2.59-2.7869-2.8105-4.7704l-.9939.1105Z"
            />
            <path
                stroke="currentColor"
                d="M19 6.5H5m14 12H5"
                strokeLinejoin="round"
            />
            <path stroke="currentColor" d="M18 15.5H6" strokeLinejoin="round" />
            <path
                stroke="currentColor"
                d="M17.5 9.5h-11"
                strokeLinejoin="round"
            />
        </svg>
    );
}
export default DnaLight;
