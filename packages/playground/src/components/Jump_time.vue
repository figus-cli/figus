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
            d="m16.336 6.462-4.108 9.037a.25.25 0 0 1-.456 0L7.664 6.462a.5.5 0 0 1 .713-.636l3.494 2.097a.25.25 0 0 0 .258 0l3.494-2.097a.5.5 0 0 1 .713.636ZM4 18h5m6 0h5"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "jumpTime",
} as DefineComponent;
</script>
