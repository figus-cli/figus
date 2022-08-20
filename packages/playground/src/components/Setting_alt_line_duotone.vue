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
            d="m5.31 6.693-1.324 2.5C3.258 10.568 2.894 11.255 2.894 12c0 .745.364 1.433 1.092 2.807l1.324 2.5c.823 1.556 1.235 2.333 1.949 2.763.714.43 1.594.43 3.353.43h2.776c1.76 0 2.64 0 3.353-.43s1.126-1.207 1.95-2.763l1.323-2.5c.728-1.375 1.092-2.062 1.092-2.807 0-.745-.364-1.433-1.092-2.807l-1.324-2.5c-.823-1.556-1.235-2.333-1.949-2.763-.714-.43-1.594-.43-3.354-.43h-2.775c-1.76 0-2.64 0-3.353.43s-1.126 1.207-1.95 2.763Z"
        />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "settingAltLineDuotone",
} as DefineComponent;
</script>
