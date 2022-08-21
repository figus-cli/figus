import React, { SVGProps } from "react";

export function GlobeLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="12" r="7.5" stroke="currentColor" />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M14.5 12c0 2.1651-.3299 4.1029-.8468 5.4813-.2592.691-.5557 1.2156-.8596 1.5583-.3044.3434-.5737.4604-.7936.4604-.2199 0-.4892-.117-.7936-.4604-.3039-.3427-.6004-.8673-.8596-1.5583C9.8299 16.1029 9.5 14.1651 9.5 12c0-2.165.33-4.1029.8468-5.4813.2592-.691.5557-1.2156.8596-1.5583.3044-.3434.5737-.4604.7936-.4604.2199 0 .4892.117.7936.4604.3039.3427.6004.8673.8596 1.5583C14.1701 7.8971 14.5 9.835 14.5 12Z"
            />
            <path fill="currentColor" stroke="currentColor" d="M4.5 12h15" />
        </svg>
    );
}
export default GlobeLight;
