<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <ellipse
            cx="12"
            cy="6"
            stroke="currentColor"
            stroke-width="2"
            rx="7"
            ry="3"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M19 18c0 .394-.181.784-.533 1.148-.352.364-.867.695-1.517.973-.65.279-1.422.5-2.271.65-.85.151-1.76.229-2.679.229-.92 0-1.83-.078-2.679-.228-.85-.151-1.62-.372-2.27-.65-.65-.28-1.166-.61-1.518-.974C5.18 18.784 5 18.394 5 18M19 6v12M5 6v12"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "database",
} as DefineComponent;
</script>
