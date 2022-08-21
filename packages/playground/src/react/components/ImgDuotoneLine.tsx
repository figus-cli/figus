import React, { SVGProps } from "react";

export function ImgDuotoneLine(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="17" cy="6" r="2" fill="currentColor" />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="m11.0534 12.7913-.6686-1.5602c-.2947-.6876-.442-1.0314-.6277-1.2548a2 2 0 0 0-2.3288-.559c-.2668.1148-.5541.3542-1.1289.8332-.7642.6368-1.1463.9553-1.4673 1.3066a7.0002 7.0002 0 0 0-1.7677 3.774C3 15.8027 3 16.311 3 17.3276c0 .62 0 .9299.0652 1.1791.1831.699.729 1.245 1.4281 1.4281C4.7425 20 5.0457 20 5.6523 20h11.6131c.6834 0 1.0251 0 1.3036-.0826a2.0001 2.0001 0 0 0 1.3484-1.3484C20 18.2905 20 17.9488 20 17.2654c0-.5983 0-.8975-.0415-1.1835a4.0007 4.0007 0 0 0-.7529-1.8176c-.1728-.2315-.3844-.4431-.8075-.8662l-.2104-.2104c-.7213-.7213-1.082-1.082-1.4909-1.234a2.0009 2.0009 0 0 0-1.3936 0c-.4089.152-.7696.5127-1.4909 1.234l-.1131.1131c-.5854.5854-.878.878-1.189.9326a1.0004 1.0004 0 0 1-.6992-.1346c-.2685-.1662-.4315-.5466-.7576-1.3075Z"
            />
        </svg>
    );
}
export default ImgDuotoneLine;
