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
            d="M2.98 10.27C4.363 8.199 7.268 5 12 5s7.635 3.198 9.02 5.27c.465.697.698 1.044.677 1.687-.021.643-.288.99-.822 1.685C19.286 15.71 16.113 19 12 19s-7.286-3.29-8.875-5.358c-.534-.695-.8-1.042-.822-1.685-.021-.643.211-.99.676-1.686ZM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "eyeFill",
} as DefineComponent;
</script>
