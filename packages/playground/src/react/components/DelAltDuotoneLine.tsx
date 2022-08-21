import React, { SVGProps } from "react";

export function DelAltDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                d="m17.0038 17.9792 1.7117-9.4146c.1167-.6419.1751-.9628.0127-1.0483-.1623-.0854-.3938.1444-.8568.604L16.985 9 12 10 6.9962 9l-.8636-.8652c-.4641-.465-.6962-.6976-.8591-.6123-.163.0853-.1042.4085.0133 1.055l1.7094 9.4017a.0682.0682 0 0 0 .0188.0358c2.7531 2.7531 7.2169 2.7531 9.97 0a.0681.0681 0 0 0 .0188-.0358Z"
            />
            <ellipse cx="12" cy="7" stroke="currentColor" rx="7" ry="3" />
            <path
                stroke="currentColor"
                d="m5 7 1.9962 10.9792a.0682.0682 0 0 0 .0188.0358c2.7531 2.7531 7.2169 2.7531 9.97 0a.0681.0681 0 0 0 .0188-.0358L19 7"
            />
        </svg>
    );
}
export default DelAltDuotoneLine;
