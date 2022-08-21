import React, { SVGProps } from "react";

export function PressureLight(props: SVGProps<SVGSVGElement>) {
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
                d="M20.6933 17.3294a9.0003 9.0003 0 0 0-1.5531-7.8082 9.0003 9.0003 0 0 0-14.2804 0 9 9 0 0 0-1.5531 7.8082"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M12.7657 15.5823c.4875.7093.1447 1.7915-.7657 2.4171-.9103.6256-2.0435.5577-2.531-.1517-.5194-.756-2.3128-5.0068-3.4019-7.6363-.205-.4952.4006-.9114.7894-.5424 2.0643 1.9593 5.3897 5.1573 5.9092 5.9133Z"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M12 6v2m-6.364.6357L7.0502 10.05M18.364 8.6357 16.9498 10.05m3.7436 7.2791-1.9319-.5176m-15.4549.5176 1.9319-.5176"
            />
        </svg>
    );
}
export default PressureLight;
