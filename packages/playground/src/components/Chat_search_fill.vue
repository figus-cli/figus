<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle
            cx="17"
            cy="16"
            r="2.5"
            stroke="currentColor"
            stroke-width="2"
        />
        <path stroke="currentColor" stroke-width="2" d="m19 18 2 2" />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M2 10.2c0-2.52 0-3.78.49-4.743a4.5 4.5 0 0 1 1.967-1.966C5.42 3 6.68 3 9.2 3h5.6c2.52 0 3.78 0 4.743.49a4.5 4.5 0 0 1 1.966 1.967C22 6.42 22 7.68 22 10.2v3.506A5.5 5.5 0 1 0 14.706 21H5.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C2 19.48 2 18.92 2 17.8v-7.6Zm4-.2a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "chatSearchFill",
} as DefineComponent;
</script>
