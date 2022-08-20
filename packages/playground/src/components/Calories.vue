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
            d="M14.5 10c0-.791 1.053-1.001 1.332-.26C16.508 11.53 17 13.134 17 14a5 5 0 0 1-10 0c0-.93.568-2.711 1.322-4.663.975-2.528 1.463-3.792 2.066-3.86.192-.022.403.017.575.107.537.28.537 1.659.537 4.416a1.5 1.5 0 0 0 3 0Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="m11 19-.263-.657a3.406 3.406 0 0 1 .503-3.393.973.973 0 0 1 1.52 0 3.406 3.406 0 0 1 .503 3.393L13 19"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "calories",
} as DefineComponent;
</script>
