import stripAnsi from "strip-ansi";
import { F_LONG_DASH } from "./figures";

export function getCols(delta = 0) {
    let length = process.stdout?.columns;
    if (!length || isNaN(length)) length = 30;
    return Math.max(length + delta, 0);
}

export function divider(text?: string, left?: number, right?: number) {
    const cols = getCols();

    if (text) {
        const textLength = stripAnsi(text).length;
        if (left == null && right != null) {
            left = cols - textLength - right;
        } else {
            left = left ?? Math.floor((cols - textLength) / 2);
            right = cols - textLength - left;
        }
        left = Math.max(0, left);
        right = Math.max(0, right);
        return `${F_LONG_DASH.repeat(left)}${text}${F_LONG_DASH.repeat(right)}`;
    }
    return F_LONG_DASH.repeat(cols);
}
