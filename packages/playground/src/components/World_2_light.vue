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
            d="m19.5 6-1.467 1.1a2 2 0 0 1-1.2.4h-3.358a1.578 1.578 0 0 0-.999 2.799l2 1.636a6 6 0 0 1 2.164 5.306l-.02.18a8.002 8.002 0 0 1-.523 2.087L15.5 21m-13-10.5 3.238-.54a2 2 0 0 1 2.302 2.302l-.135.807a3.337 3.337 0 0 0 1.8 3.533 2.503 2.503 0 0 1 1.308 2.846L10.5 21.5"
        />
        <circle cx="12" cy="12" r="9.5" stroke="currentColor" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "world_2Light",
} as DefineComponent;
</script>
