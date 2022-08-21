import React, { SVGProps } from "react";

export function BloodLight(props: SVGProps<SVGSVGElement>) {
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
                d="m12 5.5.3536-.3536a.5001.5001 0 0 0-.7072 0L12 5.5Zm0 0c-.3536-.3536-.3536-.3535-.3538-.3533l-.0003.0003a.0118.0118 0 0 1-.0009.0009l-.0031.003c-.0025.0027-.0062.0064-.0109.0111l-.0402.0412a11.908 11.908 0 0 0-.1484.1555c-.1269.135-.307.331-.5226.5785-.4306.4945-1.0053 1.1968-1.5809 2.0282C8.2032 9.6059 7 11.8387 7 14h1c0-1.8387 1.0468-3.8559 2.1611-5.4654.5494-.7936 1.0997-1.4663 1.5128-1.9406.2063-.2369.3778-.4236.497-.5503a13.4046 13.4046 0 0 1 .1723-.1796l.0083-.0085.0019-.0018.0003-.0004s-.0001 0 0 0c-.0001 0-.0001.0002-.3537-.3534Zm5 8.5c0-2.1613-1.2032-4.3941-2.3389-6.0346-.5756-.8314-1.1503-1.5337-1.5809-2.0282a20.6821 20.6821 0 0 0-.5226-.5785 12.3818 12.3818 0 0 0-.1484-.1555c-.0174-.018-.0309-.0317-.0402-.0412l-.0109-.011-.0031-.0031a.0118.0118 0 0 1-.0012-.0012c-.0002-.0002-.0002-.0003-.3538.3533s-.3536.3535-.3537.3534c.0001 0 0 0 0 0l.0003.0004.0019.0018.0083.0085a13.4046 13.4046 0 0 1 .1723.1796c.1192.1268.2907.3134.497.5503.4131.4743.9634 1.147 1.5128 1.9406C14.9532 10.1441 16 12.1613 16 14h1Zm-1 0c0 2.2091-1.7909 4-4 4v1c2.7614 0 5-2.2386 5-5h-1Zm-4 4c-2.2091 0-4-1.7909-4-4H7c0 2.7614 2.2386 5 5 5v-1Z"
            />
        </svg>
    );
}
export default BloodLight;