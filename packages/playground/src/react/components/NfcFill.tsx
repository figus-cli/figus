import React, { SVGProps } from "react";

export function NfcFill(props: SVGProps<SVGSVGElement>) {
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
                d="M22 12c0 5.5228-4.4772 10-10 10-5.5229 0-10-4.4772-10-10C2 6.4771 6.4771 2 12 2c5.5228 0 10 4.4771 10 10ZM8.6686 7.9377a.5992.5992 0 0 0-.2968-.4573.5972.5972 0 0 0-.336-.0794.5972.5972 0 0 0-.3538.0902.5994.5994 0 0 0-.2815.483A8.5998 8.5998 0 0 0 7.5522 16.3a.6.6 0 1 0 1.0392-.6 7.3999 7.3999 0 0 1-.4832-6.3949l4.2232 6.7572a.5992.5992 0 0 0 .2968.4573.5977.5977 0 0 0 .3361.0794.597.597 0 0 0 .3537-.0902.5994.5994 0 0 0 .2815-.4829A8.5996 8.5996 0 0 0 13.4478 7.7a.6.6 0 1 0-1.0392.6 7.3998 7.3998 0 0 1 .4833 6.3949L8.6686 7.9377ZM16.0067 6.8a.6.6 0 1 1 1.0392-.6 11.6001 11.6001 0 0 1 0 11.6.6.6 0 1 1-1.0392-.6 10.3998 10.3998 0 0 0 0-10.4Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default NfcFill;