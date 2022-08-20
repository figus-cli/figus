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
            stroke-width="2"
            d="M11.725 7.382a9 9 0 0 1 .364 8.563"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M14 5c-2.814 2.814-10.029 6.509-10.911 6.955a.05.05 0 0 0 0 .09C3.97 12.49 11.186 16.185 14 19m2-7h5m-5-3 5-2m-5 8 5 2"
        />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M13.687 9.519a10.003 10.003 0 0 0-.823-2.148L4 12l8.721 4.893a10.001 10.001 0 0 0 .967-2.413A2.987 2.987 0 0 1 12 15a3 3 0 1 1 1.687-5.481Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "viewHorizontFill",
} as DefineComponent;
</script>
