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
            d="M3.879 7.879C3 8.757 3 10.172 3 13v1c0 3.771 0 5.657 1.172 6.828C5.343 22 7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172C21 19.657 21 17.771 21 14v-1c0-2.828 0-4.243-.879-5.121C19.243 7 17.828 7 15 7H9c-2.828 0-4.243 0-5.121.879ZM12 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3-1a3.001 3.001 0 0 1-2 2.83V19h-2v-2.17A3.001 3.001 0 1 1 15 14Z"
            clip-rule="evenodd"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M16.5 8a4.71 4.71 0 0 0-2.028-4.69l-.374-.25a5.407 5.407 0 0 0-6.545.407l-.883.764"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "unlockFill",
} as DefineComponent;
</script>
