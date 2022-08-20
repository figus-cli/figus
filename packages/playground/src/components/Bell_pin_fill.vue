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
            d="M13.794 3.295A5.578 5.578 0 0 0 12 3a5.586 5.586 0 0 0-5.552 4.97l-.252 2.266-.006.057a8 8 0 0 1-1.074 3.18l-.03.05-.577.963c-.525.874-.787 1.311-.73 1.67a1 1 0 0 0 .345.61c.279.234.789.234 1.808.234h12.136c1.02 0 1.529 0 1.808-.233a1 1 0 0 0 .346-.611c.056-.359-.206-.796-.73-1.67l-.579-.964-.03-.05a8.001 8.001 0 0 1-.96-2.473 5 5 0 0 1-4.129-7.704Zm2.48 1.694A1.99 1.99 0 0 0 16 6a2 2 0 0 0 1.55 1.95 5.567 5.567 0 0 0-1.276-2.961Z"
            clip-rule="evenodd"
        />
        <path
            fill="currentColor"
            d="M9 17a3 3 0 0 0 1.852 2.772 3 3 0 0 0 3.27-.65A3 3 0 0 0 15 17H9Z"
        />
        <circle
            cx="18"
            cy="6"
            r="2.5"
            fill="currentColor"
            stroke="currentColor"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "bellPinFill",
} as DefineComponent;
</script>
