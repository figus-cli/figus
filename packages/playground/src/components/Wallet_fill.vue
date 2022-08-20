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
            d="M20 5a1 1 0 1 0 0-2v2ZM5.5 5H20V3H5.5v2Zm0 5h8V8h-8v2ZM4 6.5A1.5 1.5 0 0 1 5.5 5V3A3.5 3.5 0 0 0 2 6.5h2Zm-2 0A3.5 3.5 0 0 0 5.5 10V8A1.5 1.5 0 0 1 4 6.5H2Z"
        />
        <path stroke="currentColor" stroke-width="2" d="M3 12V6.5" />
        <path
            fill="currentColor"
            stroke="currentColor"
            d="M3 8.5h-.5v10.533c0 .443 0 .825.041 1.13.044.329.143.643.398.898.255.254.57.354.897.398.306.041.688.041 1.131.041h14.066c.443 0 .825 0 1.13-.041.329-.044.643-.144.898-.398.254-.255.354-.57.398-.897.041-.306.041-.688.041-1.131V17.5H18a2.5 2.5 0 0 1 0-5h3.5v-1.533c0-.443 0-.825-.041-1.13-.044-.329-.143-.643-.398-.898s-.57-.354-.897-.398c-.306-.041-.688-.041-1.131-.041H3Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "walletFill",
} as DefineComponent;
</script>
