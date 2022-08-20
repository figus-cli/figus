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
            d="m8.574 19.352 3.381-6.763a.05.05 0 0 1 .09 0l3.381 6.763c.022.044-.026.09-.07.066l-3.331-1.904a.05.05 0 0 0-.05 0l-3.332 1.904c-.043.025-.091-.022-.07-.066Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            d="M16 16.5h2.3c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874c.218-.428.218-.988.218-2.108V7.7c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.98 4.5 19.42 4.5 18.3 4.5H5.7c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2.5 6.02 2.5 6.58 2.5 7.7v5.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.428.218.988.218 2.108.218H8m-2.5 0 2-12m11 12-2-12m-4.5 5v-3"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "roadLight",
} as DefineComponent;
</script>
