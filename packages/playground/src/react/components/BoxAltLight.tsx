import React, { SVGProps } from "react";

export function BoxAltLight(props: SVGProps<SVGSVGElement>) {
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
                d="M9 12a3 3 0 0 0 6 0"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M4.5 8.7111c0-.6011 0-.9017.0858-1.1851.0858-.2835.2526-.5335.586-1.0337l.1407-.2111c.5813-.872.872-1.3079 1.3141-1.5446C7.0688 4.5 7.5928 4.5 8.6408 4.5h6.7186c1.0479 0 1.5719 0 2.014.2367.4422.2366.7329.6726 1.3142 1.5445l.1407.2111c.3334.5002.5002.7502.586 1.0337.0858.2834.0858.584.0858 1.1851V15.5c0 1.8856 0 2.8284-.5858 3.4142-.5858.5858-1.5286.5858-3.4142.5858h-7c-1.8856 0-2.8284 0-3.4142-.5858C4.5 18.3284 4.5 17.3856 4.5 15.5V8.7111Z"
            />
            <path fill="currentColor" stroke="currentColor" d="M4.5 9.5h15" />
        </svg>
    );
}
export default BoxAltLight;
