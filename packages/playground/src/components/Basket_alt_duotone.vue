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
            fill-opacity=".24"
            d="M20 10H4a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2ZM6.802 18.22l-.604-5.44A2 2 0 0 0 4.21 11h15.58a2 2 0 0 0-1.988 1.78l-.604 5.44A2 2 0 0 1 15.21 20H8.79a2 2 0 0 1-1.988-1.78Z"
        />
        <path
            stroke="currentColor"
            d="m8.5 3.5-2 3m9-3 2 3m-7 10-1-3m4 3 1-3"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "basketAltDuotone",
} as DefineComponent;
</script>
