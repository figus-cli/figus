<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            fill="currentColor"
            fill-opacity=".24"
            d="M12 19V6s-1-2-4.5-2S3 6 3 6v13s1-2 4.5-2 4.5 2 4.5 2Z"
        />
        <mask
            id="a"
            width="9"
            height="15"
            x="3"
            y="4"
            maskUnits="userSpaceOnUse"
            style="mask-type: alpha"
        >
            <path
                fill="currentColor"
                d="M12 19V6s-1-2-4.5-2S3 6 3 6v13s1-2 4.5-2 4.5 2 4.5 2Z"
            />
        </mask>
        <g mask="url(#a)">
            <path
                fill="currentColor"
                d="M5 4.15A.15.15 0 0 1 5.15 4h2.7a.15.15 0 0 1 .15.15v4.246a.25.25 0 0 1-.427.177l-.896-.896a.25.25 0 0 0-.354 0l-.896.896A.25.25 0 0 1 5 8.396V4.15Z"
            />
        </g>
        <path
            fill="currentColor"
            d="M13 19V6s.889-2 4-2 4 2 4 2v13s-.889-2-4-2-4 2-4 2Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "bookOpenAltDuotone",
} as DefineComponent;
</script>
