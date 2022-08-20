<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            stroke="currentColor"
            stroke-opacity=".24"
            d="M19.361 18c.746.456 1.139.973 1.139 1.5s-.393 1.044-1.139 1.5c-.746.456-1.819.835-3.111 1.098-1.292.263-2.758.402-4.25.402s-2.958-.139-4.25-.402c-1.292-.263-2.365-.642-3.111-1.098-.746-.456-1.139-.973-1.139-1.5s.393-1.044 1.139-1.5"
        />
        <path
            fill="currentColor"
            fill-opacity=".24"
            d="M19 10c0 5.016-5.119 8.035-6.602 8.804a.855.855 0 0 1-.796 0C10.119 18.034 5 15.016 5 10a7 7 0 1 1 14 0Z"
        />
        <circle cx="12" cy="10" r="3" fill="currentColor" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "pinAltDuotone",
} as DefineComponent;
</script>
