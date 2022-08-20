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
            d="M19 15h-7v3.517a.2.2 0 0 1-.341.142L5 12l6.659-6.659a.2.2 0 0 1 .341.142V9h7"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "transferLeftLight",
} as DefineComponent;
</script>
