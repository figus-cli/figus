import React, { SVGProps } from "react";

export function FavoritesLight(props: SVGProps<SVGSVGElement>) {
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
                d="M19.5 11c0 5.018-5.4883 8.4027-7.0751 9.2764-.2681.1476-.5817.1476-.8498 0C9.9883 19.4027 4.5 16.018 4.5 11c0-4.5 3.634-7.5 7.5-7.5 4 0 7.5 3 7.5 7.5Z"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="m8.286 11.786 3.4569 3.4569c.1212.1212.1818.1818.2571.1818s.1359-.0606.2571-.1818l3.4569-3.4569c.7477-.7477.8638-1.9194.2772-2.7993-.9149-1.3722-2.9539-1.302-3.7721.13l-.1411.2469a.0899.0899 0 0 1-.156 0l-.1411-.247c-.8182-1.4318-2.8573-1.502-3.772-.1299-.5867.88-.4706 2.0516.2771 2.7993Z"
            />
        </svg>
    );
}
export default FavoritesLight;
