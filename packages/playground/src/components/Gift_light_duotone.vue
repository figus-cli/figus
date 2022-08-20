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
            d="M5 8h14v8c0 1.886 0 2.828-.586 3.414C17.828 20 16.886 20 15 20H9c-1.886 0-2.828 0-3.414-.586C5 18.828 5 17.886 5 16V8Z"
        />
        <path
            stroke="currentColor"
            d="m12 8-.24-2.153A2.654 2.654 0 0 0 9.124 3.5C7.683 3.5 6.5 4.667 6.5 6.106c0 .87.435 1.684 1.16 2.167L9.5 9.5M12 8l.24-2.153A2.654 2.654 0 0 1 14.876 3.5c1.44 0 2.623 1.166 2.623 2.606a2.606 2.606 0 0 1-1.16 2.167L14.5 9.5"
        />
        <rect width="16" height="3" x="4" y="8" fill="currentColor" rx="1" />
        <path stroke="currentColor" d="M12 11v4" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "giftLightDuotone",
} as DefineComponent;
</script>
