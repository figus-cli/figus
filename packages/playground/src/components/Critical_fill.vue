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
            fill-rule="evenodd"
            d="M20.945 15.002c.06.549-.393.998-.945.998h-3.005c-.552 0-.988-.455-1.125-.99a3.994 3.994 0 0 0-.714-1.46L18.708 10a9 9 0 0 1 2.237 5.002ZM18 9.292a9 9 0 0 0-5.5-2.278v5.022a3.994 3.994 0 0 1 1.949.808L18 9.292Zm-8.449 3.552a3.994 3.994 0 0 1 1.949-.807V7.014A9 9 0 0 0 6 9.292l3.551 3.552ZM5.292 9.999a9 9 0 0 0-2.237 5.003c-.06.549.393.998.945.998h3.005c.552 0 .988-.455 1.125-.99a3.995 3.995 0 0 1 .714-1.46L5.292 10Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "criticalFill",
} as DefineComponent;
</script>
