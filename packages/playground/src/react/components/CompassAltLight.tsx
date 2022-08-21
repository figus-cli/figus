import React, { SVGProps } from "react";

export function CompassAltLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="12" r="9.5" stroke="currentColor" />
            <path stroke="currentColor" d="M18.5 12h1" />
            <path
                fill="currentColor"
                d="M4.5 11.5a.5.5 0 0 0 0 1v-1Zm1 1a.5.5 0 0 0 0-1v1Zm7-8a.5.5 0 0 0-1 0h1Zm-1 1a.5.5 0 0 0 1 0h-1Zm1 13a.5.5 0 0 0-1 0h1Zm-1 1a.5.5 0 0 0 1 0h-1Zm-7-7h1v-1h-1v1Zm7-8v1h1v-1h-1Zm0 14v1h1v-1h-1Zm5.4508-1.6149.4595-.197-.4595.197Zm-.0657.0657-.197.4595.197-.4595Zm-7.5154-4.4214-.4595.1969.4595-.1969Zm.4596-.197L7.5088 6.9179l-.9191.394 2.3205 5.4144.9191-.3939ZM6.9179 7.5088l5.4145 2.3205.3939-.9191-5.4145-2.3205-.3939.9191Zm7.2528 4.1588 2.3205 5.4145.9191-.394-2.3205-5.4144-.9191.3939Zm2.9114 4.8236-5.4145-2.3205-.3939.9191 5.4144 2.3205.394-.9191Zm-.5909.5909c-.16-.3734.2175-.7509.5909-.5909l-.394.9191c.4564.1956.9178-.2658.7222-.7222l-.9191.394ZM7.5088 6.9179c.16.3734-.2175.751-.5909.591l.394-.9192c-.4564-.1956-.9178.2658-.7222.7222l.9191-.394Zm1.4014 5.8084a4.4995 4.4995 0 0 0 2.3635 2.3635l.3939-.9191a3.4996 3.4996 0 0 1-1.8383-1.8383l-.9191.3939Zm3.4222-2.897a3.4996 3.4996 0 0 1 1.8383 1.8383l.9191-.3939a4.4995 4.4995 0 0 0-2.3635-2.3635l-.3939.9191Z"
            />
            <circle cx="12" cy="12" r="2.5" stroke="currentColor" />
        </svg>
    );
}
export default CompassAltLight;
