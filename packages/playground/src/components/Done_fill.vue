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
            stroke-width="2"
            d="m19.548 7.266.633-.774-.774-.633-1.548-1.266-.774-.633-.633.774-7.786 9.516L6.2 12.4l-.8-.6-.6.8-1.2 1.6-.6.8.8.6 4.767 3.575.767.575.607-.742 9.607-11.742Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "doneFill",
} as DefineComponent;
</script>
