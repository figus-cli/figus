import React, { SVGProps } from "react";

export function WorldLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="12" r="8" stroke="currentColor" />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M18.2075 6.7848c-.7328.676-1.6531 1.2243-2.6969 1.6066-1.0438.3824-2.1862.5896-3.3476.6073-1.1614.0178-2.314-.1544-3.3778-.5045-1.0637-.35-2.013-.8697-2.782-1.5228m12.319 10.3521c-.7396-.7155-1.6855-1.2961-2.7669-1.6984-1.0813-.4024-2.27-.616-3.477-.6248-1.207-.0089-2.401.1872-3.4927.5736-1.0916.3864-2.0525.953-2.8106 1.6575M12 4v16m8-8H4"
            />
        </svg>
    );
}
export default WorldLight;
