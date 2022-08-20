<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="8" r="5" stroke="currentColor" stroke-width="2" />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M12 5v6m3-3H9m12 6h-2.93c-.524 0-.786 0-1.007.118-.22.119-.366.337-.657.773l-.812 1.218c-.29.436-.436.654-.657.773-.221.118-.483.118-1.007.118h-3.86c-.524 0-.786 0-1.007-.118-.22-.119-.366-.337-.657-.773l-.812-1.218c-.29-.436-.436-.654-.657-.773C6.716 14 6.454 14 5.93 14H3"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M7 10h-.586a1 1 0 0 0-.707.293l-2.414 2.414a1 1 0 0 0-.293.707V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5.586a1 1 0 0 0-.293-.707l-2.414-2.414a1 1 0 0 0-.707-.293H17"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "arhiveAltSmallAdd",
} as DefineComponent;
</script>
