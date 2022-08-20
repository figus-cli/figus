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
            d="M18.896 10H8v4h6.732a.5.5 0 0 0 .416-.223l.436-.653a.5.5 0 0 1 .832 0l.376.564a.25.25 0 0 0 .416 0l.376-.564a.5.5 0 0 1 .832 0l.415.622a.25.25 0 0 0 .385.038l1.607-1.607a.25.25 0 0 0 0-.354l-1.75-1.75a.25.25 0 0 0-.177-.073Z"
        />
        <rect width="6" height="1" x="10" y="11" fill="currentColor" rx=".5" />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M3.586 8.586C3 9.172 3 10.114 3 12c0 1.886 0 2.828.586 3.414C4.172 16 5.114 16 7 16c1.886 0 2.828 0 3.414-.586C11 14.828 11 13.886 11 12c0-1.886 0-2.828-.586-3.414C9.828 8 8.886 8 7 8c-1.886 0-2.828 0-3.414.586ZM6 10a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "keyDuotone",
} as DefineComponent;
</script>
