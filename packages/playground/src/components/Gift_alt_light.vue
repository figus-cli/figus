<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <rect
            width="17"
            height="3"
            x="3.5"
            y="9.5"
            stroke="currentColor"
            rx="1.5"
        />
        <path
            stroke="currentColor"
            d="M5.5 12.5v5.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.428.218.988.218 2.108.218h6.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874c.218-.428.218-.988.218-2.108v-5.8"
        />
        <path
            fill="currentColor"
            d="M12.5 9.5v.5h.5v-.5h-.5Zm.5 0v-3h-1v3h1Zm-3.5.5h3V9h-3v1ZM6 6.5A3.5 3.5 0 0 0 9.5 10V9A2.5 2.5 0 0 1 7 6.5H6ZM9.5 3A3.5 3.5 0 0 0 6 6.5h1A2.5 2.5 0 0 1 9.5 4V3ZM13 6.5A3.5 3.5 0 0 0 9.5 3v1A2.5 2.5 0 0 1 12 6.5h1Z"
        />
        <path
            fill="currentColor"
            d="M12.5 9.5v.5H12v-.5h.5Zm-.5 0v-2h1v2h-1Zm2.5.5h-2V9h2v1ZM17 7.5a2.5 2.5 0 0 1-2.5 2.5V9A1.5 1.5 0 0 0 16 7.5h1ZM14.5 5A2.5 2.5 0 0 1 17 7.5h-1A1.5 1.5 0 0 0 14.5 6V5ZM12 7.5A2.5 2.5 0 0 1 14.5 5v1A1.5 1.5 0 0 0 13 7.5h-1Z"
        />
        <path stroke="currentColor" d="M12.5 9.5v12" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "giftAltLight",
} as DefineComponent;
</script>
