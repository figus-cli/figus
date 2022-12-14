import React, { SVGProps } from "react";

export function NotebookFill(props: SVGProps<SVGSVGElement>) {
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
                d="M7.0508 6h1.9493C10.1045 6 11 6.8954 11 8s-.8954 2-2 2H7v1h2c1.1046 0 2 .8954 2 2s-.8954 2-2 2H7v1h2c1.1046 0 2 .8954 2 2s-.8954 2-2 2H7.2926a1.512 1.512 0 0 0 .2933.4142C8.1716 21 9.1144 21 11 21h5c1.8857 0 2.8285 0 3.4143-.5858C20 19.8284 20 18.8856 20 17V8c0-1.8856 0-2.8284-.5857-3.4142C18.8285 4 17.8857 4 16 4h-5c-1.8856 0-2.8284 0-3.4142.5858-.3266.3266-.471.7641-.535 1.4142ZM16 11c-.5523 0-1-.4477-1-1V8c0-.5523.4477-1 1-1s1 .4477 1 1v2c0 .5523-.4477 1-1 1ZM5 7c-.5523 0-1 .4477-1 1s.4477 1 1 1h4c.5523 0 1-.4477 1-1s-.4477-1-1-1H5Zm0 5c-.5523 0-1 .4477-1 1s.4477 1 1 1h4c.5523 0 1-.4477 1-1s-.4477-1-1-1H5Zm0 5c-.5523 0-1 .4477-1 1s.4477 1 1 1h4c.5523 0 1-.4477 1-1s-.4477-1-1-1H5Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default NotebookFill;
