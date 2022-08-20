<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            fill="none"
            stroke="currentColor"
            stroke-opacity=".24"
            d="M5.347 10.334c.073-.87.109-1.306.396-1.57S6.467 8.5 7.34 8.5h9.32c.873 0 1.31 0 1.597.264.287.264.323.7.396 1.57l.224 2.692c.243 2.916.365 4.374-.246 5.45a4 4 0 0 1-1.22 1.326c-1.021.698-2.485.698-5.411.698-2.926 0-4.39 0-5.41-.698a4 4 0 0 1-1.22-1.326c-.612-1.076-.49-2.534-.247-5.45l.224-2.692Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            d="M8.5 7v-.5a3.5 3.5 0 1 1 7 0V7"
        />
        <path fill="none" stroke="currentColor" d="M8.5 12.5V11m7 1.5V11" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "bagDuotoneLine",
} as DefineComponent;
</script>
