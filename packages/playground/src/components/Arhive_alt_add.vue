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
            d="M21 12h-2.93c-.524 0-.786 0-1.007.118-.22.119-.366.337-.657.773l-.812 1.218c-.29.436-.436.654-.657.773-.221.118-.483.118-1.007.118h-3.86c-.524 0-.786 0-1.007-.118-.22-.119-.366-.337-.657-.773l-.812-1.218c-.29-.436-.436-.654-.657-.773C6.716 12 6.454 12 5.93 12H3"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="m5 9-1.707 1.707a1 1 0 0 0-.293.707V17a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5.586a1 1 0 0 0-.293-.707L19 9"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="m8.5 7 3.5 3m0 0 3.5-3M12 10V3"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "arhiveAltAdd",
} as DefineComponent;
</script>
