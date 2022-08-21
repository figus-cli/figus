import React, { SVGProps } from "react";

export function VerticalSwitchLight(props: SVGProps<SVGSVGElement>) {
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
                d="m8 20-.3536.3536.3536.3535.3536-.3535L8 20Zm2-13.5a.5.5 0 0 0 0-1v1ZM4.6464 17.3536l3 3 .7072-.7072-3-3-.7072.7072Zm3.7072 3 3-3-.7072-.7072-3 3 .7072.7072ZM8.5 20V8h-1v12h1Zm0-12c0-.8284.6716-1.5 1.5-1.5v-1C8.6193 5.5 7.5 6.6193 7.5 8h1ZM16 4l-.3536-.3535L16 3.2929l.3536.3536L16 4Zm0 13h.5-.5Zm-2 2.5a.5.5 0 0 1 0-1v1ZM12.6464 6.6464l3-3 .7072.7072-3 3-.7072-.7072Zm3.7072-3 3 3-.7072.7072-3-3 .7072-.7071ZM16.5 4v13h-1V4h1Zm0 13c0 1.3807-1.1193 2.5-2.5 2.5v-1c.8284 0 1.5-.6716 1.5-1.5h1Z"
            />
        </svg>
    );
}
export default VerticalSwitchLight;
