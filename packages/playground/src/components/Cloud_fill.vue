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
            d="M9 19.99a.01.01 0 0 0-.01-.008A6.573 6.573 0 0 1 8.5 20a6.5 6.5 0 1 1 5.954-9.112C14.73 11.518 15.312 12 16 12a4 4 0 0 1 0 8H9.01a.01.01 0 0 1-.01-.01Zm10.46-8.265A4.001 4.001 0 1 0 14.012 7.7a8.017 8.017 0 0 1 1.816 2.584c.042.096.1.162.145.195a.151.151 0 0 0 .033.02 5.478 5.478 0 0 1 3.456 1.225ZM16.01 10.5a.01.01 0 0 1-.003 0h.002Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "cloudFill",
} as DefineComponent;
</script>
