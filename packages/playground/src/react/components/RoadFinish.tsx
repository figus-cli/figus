import React, { SVGProps } from "react";

export function RoadFinish(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                stroke="currentColor"
                d="M17 11h.8c1.1201 0 1.6802 0 2.108.218.3763.1917.6823.4977.874.874.218.4278.218.9879.218 2.108v3.6c0 1.1201 0 1.6802-.218 2.108a1.9996 1.9996 0 0 1-.874.874C19.4802 21 18.9201 21 17.8 21H6.2c-1.1201 0-1.6802 0-2.108-.218a1.9997 1.9997 0 0 1-.874-.874C3 19.4802 3 18.9201 3 17.8v-3.6c0-1.1201 0-1.6802.218-2.108a1.9997 1.9997 0 0 1 .874-.874C4.5198 11 5.08 11 6.2 11H7"
            />
            <path
                fill="currentColor"
                d="M4.511 20.8517c-.0819.5461.2945 1.0553.8407 1.1372.5461.082 1.0553-.2944 1.1372-.8406l-1.9778-.2966Zm3.478-9.7034c.0819-.5461-.2945-1.0553-.8407-1.1372-.5461-.082-1.0553.2944-1.1372.8406l1.9778.2966Zm9.5221 10c.0819.5462.5911.9226 1.1372.8406.5462-.0819.9226-.5911.8406-1.1372l-1.9778.2966Zm.4778-10.2966c-.0819-.5462-.5911-.9226-1.1372-.8406-.5462.0819-.9226.5911-.8406 1.1372l1.9778-.2966Zm-11.5 10.2966 1.5-10-1.9778-.2966-1.5 10 1.9778.2966Zm13-.2966-1.5-10-1.9778.2966 1.5 10 1.9778-.2966Z"
            />
            <path stroke="currentColor" d="M12 17v-3" />
            <path
                stroke="currentColor"
                d="M12 7V3.5c0-.2357 0-.3535.0732-.4268C12.1464 3 12.2643 3 12.5 3H17l-1.5 2L17 7h-5Zm0 0v3"
            />
        </svg>
    );
}
export default RoadFinish;
