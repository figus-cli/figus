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
            d="m17.004 17.98 1.711-9.415c.117-.642.176-.963.013-1.049-.162-.085-.394.145-.857.604l-.886.88L12 10 6.996 9l-.863-.865c-.464-.465-.697-.698-.86-.612-.162.085-.104.408.014 1.055l1.71 9.401a.068.068 0 0 0 .018.036 7.05 7.05 0 0 0 9.97 0 .068.068 0 0 0 .019-.036Z"
        />
        <ellipse
            cx="12"
            cy="7"
            stroke="currentColor"
            stroke-width="1.2"
            rx="7"
            ry="3"
        />
        <path
            stroke="currentColor"
            stroke-width="1.2"
            d="m5 7 1.996 10.98a.068.068 0 0 0 .019.035 7.05 7.05 0 0 0 9.97 0 .068.068 0 0 0 .019-.036L19 7"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "delAltDuotoneLine",
} as DefineComponent;
</script>
