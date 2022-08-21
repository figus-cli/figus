import React, { SVGProps } from "react";

export function AtomAlt(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="12" r="1" fill="currentColor" />
            <path
                stroke="currentColor"
                d="M17 12c0 2.6113-.6371 4.9271-1.6149 6.5566C14.3955 20.206 13.1676 21 12 21c-1.1676 0-2.3955-.794-3.3851-2.4434C7.637 16.9271 7 14.6113 7 12c0-2.6113.6371-4.927 1.6149-6.5566C9.6044 3.794 10.8323 3 12 3c1.1676 0 2.3955.794 3.3851 2.4434C16.3629 7.073 17 9.3887 17 12Z"
            />
            <path
                stroke="currentColor"
                d="M12 17c-2.6113 0-4.927-.6371-6.5566-1.6149C3.794 14.3955 3 13.1676 3 12c0-1.1676.794-2.3955 2.4434-3.3851C7.073 7.637 9.3887 7 12 7c2.6113 0 4.9271.6371 6.5566 1.6149C20.206 9.6044 21 10.8323 21 12c0 1.1676-.794 2.3955-2.4434 3.3851C16.9271 16.3629 14.6113 17 12 17Z"
            />
        </svg>
    );
}
export default AtomAlt;
