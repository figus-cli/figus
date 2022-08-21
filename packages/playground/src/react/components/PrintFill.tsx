import React, { SVGProps } from "react";

export function PrintFill(props: SVGProps<SVGSVGElement>) {
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
                d="M18 6H6c-1.8856 0-2.8284 0-3.4142.5858C2 7.1716 2 8.1144 2 10v3c0 .4714 0 .7071.1465.8536C2.2929 14 2.5286 14 3 14h4.7c.1414 0 .2121 0 .256-.0439C8 13.9121 8 13.8414 8 13.7v-.2c0-.9428 0-1.4142.2929-1.7071C8.5858 11.5 9.0572 11.5 10 11.5h4c.9428 0 1.4142 0 1.7071.2929C16 12.0858 16 12.5572 16 13.5v.2c0 .1414 0 .2121.0439.2561.044.0439.1147.0439.2561.0439H20c.9428 0 1.4142 0 1.7071-.2929C22 13.4142 22 12.9428 22 12v-2c0-1.8856 0-2.8284-.5858-3.4142C20.8284 6 19.8856 6 18 6ZM7 3.7391c0-.6919 0-1.0378.1638-1.2875a.9997.9997 0 0 1 .2877-.2878C7.7013 2 8.0473 2 8.7392 2h6.5218c.6919 0 1.0378 0 1.2876.1638.1146.0752.2125.1731.2877.2877C17 2.7014 17 3.0474 17 3.7392c0 .1038 0 .1557-.0246.1932a.1488.1488 0 0 1-.0431.0431C16.8948 4 16.8429 4 16.7391 4H7.2609c-.1038 0-.1557 0-.1932-.0246a.1502.1502 0 0 1-.0431-.0431C7 3.8948 7 3.8429 7 3.739Z"
            />
            <path
                fill="currentColor"
                d="M5 20.3371V13c0-.9428 0-1.4142.2929-1.7071C5.5858 11 6.0572 11 7 11h10c.9428 0 1.4142 0 1.7071.2929C19 11.5858 19 12.0572 19 13v7.3371c0 .304 0 .456-.0995.5311-.0994.075-.2455.0332-.5378-.0503h-.0001l-2.7252-.7787c-.0683-.0195-.1024-.0292-.1374-.0292-.035 0-.0691.0097-.1374.0292l-3.2252.9216c-.0683.0194-.1024.0292-.1374.0292-.035 0-.0691-.0098-.1374-.0292l-3.2252-.9216C8.569 20.0197 8.535 20.01 8.5 20.01c-.035 0-.0691.0097-.1374.0292l-2.7252.7787c-.2924.0835-.4385.1253-.538.0503C5 20.7931 5 20.6411 5 20.3371ZM9 14c0-.5523.4477-1 1-1h3c.5523 0 1 .4477 1 1s-.4477 1-1 1h-3c-.5523 0-1-.4477-1-1Zm1 2c-.5523 0-1 .4477-1 1s.4477 1 1 1h4.5c.5523 0 1-.4477 1-1s-.4477-1-1-1H10Z"
            />
        </svg>
    );
}
export default PrintFill;
