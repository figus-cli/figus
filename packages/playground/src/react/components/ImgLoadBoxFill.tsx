import React, { SVGProps } from "react";

export function ImgLoadBoxFill(props: SVGProps<SVGSVGElement>) {
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
                d="M2.0186 7.4954C2 8.2235 2 9.0522 2 10v2h8.0971a3.3084 3.3084 0 0 0-1.0818-.2985L7 11.5c-1.3134-.1314-1.97-.197-2.5028-.413a4 4 0 0 1-2.3353-2.5805c-.0832-.2835-.1236-.5955-.1433-1.0111Zm19.8556-1.7209L21.5 17a3.6218 3.6218 0 0 1-2.5607-1.0607l-1.127-1.127c-.37-.3701-.5551-.5551-.7426-.6738a1.9999 1.9999 0 0 0-2.1394 0c-.1875.1187-.3726.3037-.7426.6738l-.7732.7731c-.522.522-1.4145.1523-1.4145-.5859V22h2c3.7712 0 5.6569 0 6.8284-1.1716C22 19.6568 22 17.7712 22 14v-4c0-1.7926 0-3.1591-.1258-4.2255Z"
            />
            <path
                stroke="currentColor"
                d="M3 10c0-1.9139.0021-3.2487.1375-4.2558.1316-.9784.3722-1.4965.7412-1.8655s.887-.6096 1.8655-.7412C6.7512 3.0021 8.0862 3 10 3h4c1.9139 0 3.2487.0021 4.2558.1375.9784.1316 1.4965.3722 1.8655.7412l.6899-.6899-.6899.6899c.369.369.6096.887.7412 1.8655C20.9979 6.7512 21 8.0862 21 10v4c0 1.9139-.0021 3.2487-.1375 4.2558-.1316.9784-.3722 1.4965-.7412 1.8655s-.8871.6096-1.8655.7412C17.2487 20.9979 15.9139 21 14 21h-1v-7.0544c.0001-.4241.0002-.8362-.0455-1.1761-.0515-.3832-.1771-.8205-.5403-1.1837-.3632-.3632-.8005-.4888-1.1837-.5403-.3399-.0457-.752-.0456-1.1761-.0455H3v-1Z"
            />
            <circle cx="16" cy="8" r="2" fill="currentColor" />
            <path
                fill="currentColor"
                d="M8 16v-1h1v1H8Zm-4.3753 4.7809c-.4313.345-1.0606.2751-1.4056-.1562s-.275-1.0606.1562-1.4056l1.2494 1.5618ZM7 21v-5h2v5H7Zm1-4H3v-2h5v2Zm.6247-.2191-5 4-1.2494-1.5618 5-4 1.2494 1.5618Z"
            />
        </svg>
    );
}
export default ImgLoadBoxFill;
