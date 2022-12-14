import React, { SVGProps } from "react";

export function PrintLight(props: SVGProps<SVGSVGElement>) {
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
                d="M18 13.5h.5c.9428 0 1.4142 0 1.7071-.2929.2929-.2929.2929-.7643.2929-1.7071v-1c0-1.8856 0-2.8284-.5858-3.4142C19.3284 6.5 18.3856 6.5 16.5 6.5h-9c-1.8856 0-2.8284 0-3.4142.5858C3.5 7.6716 3.5 8.6144 3.5 10.5v2c0 .4714 0 .7071.1465.8536.1464.1464.3821.1464.8535.1464H6"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M6.5 19.8063V11.5c0-.9428 0-1.4142.2929-1.7071C7.0858 9.5 7.5572 9.5 8.5 9.5h7c.9428 0 1.4142 0 1.7071.2929.2929.2929.2929.7643.2929 1.7071v8.3063c0 .3165 0 .4748-.1038.5497-.1038.0748-.254.0247-.5543-.0754l-2.1681-.7227c-.086-.0286-.129-.043-.1733-.0417-.0444.0013-.0864.0182-.1706.0518l-2.1442.8577c-.0917.0367-.1376.055-.1857.055-.0481 0-.094-.0183-.1857-.055l-2.1442-.8577c-.0842-.0336-.1262-.0505-.1706-.0518-.0443-.0013-.0873.0131-.1732.0417l-2.1682.7227c-.3003.1001-.4505.1502-.5543.0754-.1038-.0749-.1038-.2332-.1038-.5497Z"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M9.5 13.5h4m-4 3h5"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M17.5 6.5v-.4c0-1.697 0-2.5456-.5272-3.0728C16.4456 2.5 15.5971 2.5 13.9 2.5h-3.8c-1.697 0-2.5456 0-3.0728.5272C6.5 3.5544 6.5 4.403 6.5 6.1v.4"
            />
        </svg>
    );
}
export default PrintLight;
