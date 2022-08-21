import React, { SVGProps } from "react";

export function ProteinLight(props: SVGProps<SVGSVGElement>) {
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
                d="M9.2994 5.6812c1.3383-1.8242 4.0629-1.8242 5.4012 0l.7669 1.0453a16.093 16.093 0 0 1 3.0148 7.7062c.2987 2.6358-1.3514 5.1013-3.902 5.8301l-.7685.2196a6.5957 6.5957 0 0 1-3.6236 0l-.7685-.2196c-2.5506-.7288-4.2007-3.1943-3.902-5.8301a16.092 16.092 0 0 1 3.0148-7.7062l.7669-1.0453Z"
            />
        </svg>
    );
}
export default ProteinLight;
