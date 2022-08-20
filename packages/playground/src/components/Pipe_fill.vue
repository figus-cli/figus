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
            d="M8.517 4.796a8 8 0 0 0-4.496 7.79l6.142-1.646-1.646-6.144Zm2.898-.775 1.775 6.625.012.044c.05.185.12.447.151.688.04.302.048.781-.233 1.269-.282.488-.701.72-.983.837a5.424 5.424 0 0 1-.671.212l-.044.012-6.626 1.776A8 8 0 1 0 11.415 4.02Z"
            clip-rule="evenodd"
        />
        <path
            fill="currentColor"
            d="M9.93 4.273c-.252-.937-.377-1.405-.81-1.6-.431-.195-.813-.005-1.576.374A10 10 0 0 0 3.34 7a10 10 0 0 0-1.32 5.618c.052.85.078 1.275.463 1.552.385.277.853.151 1.79-.1l5.795-1.552c.91-.244 1.366-.366 1.573-.725.207-.359.085-.814-.159-1.725L9.93 4.273Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "pipeFill",
} as DefineComponent;
</script>
