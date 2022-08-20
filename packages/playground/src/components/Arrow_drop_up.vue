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
            d="m12.205 7.293 5.914 8.448A.8.8 0 0 1 17.464 17H6.537a.8.8 0 0 1-.656-1.259l5.914-8.448a.25.25 0 0 1 .41 0Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "arrowDropUp",
} as DefineComponent;
</script>
