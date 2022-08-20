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
            d="M6.5 8a5.5 5.5 0 1 1 11 0v2a7.5 7.5 0 0 0 1.5 4.5l.214.286a3.5 3.5 0 0 1 .13.18 1 1 0 0 1-.765 1.53c-.04.004-.1.004-.222.004H5.643c-.122 0-.183 0-.222-.003a1 1 0 0 1-.766-1.532 3.5 3.5 0 0 1 .13-.18L5 14.5A7.5 7.5 0 0 0 6.5 10V8Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            d="M9.585 18.647a2.5 2.5 0 0 0 4.83 0"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "bellDuotoneLine",
} as DefineComponent;
</script>
