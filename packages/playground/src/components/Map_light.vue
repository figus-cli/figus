<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            stroke="currentColor"
            d="M2.5 5.7c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C4.02 2.5 4.58 2.5 5.7 2.5h12.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.428.218.988.218 2.108v12.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.428.218-.988.218-2.108.218H5.7c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C2.5 19.98 2.5 19.42 2.5 18.3V5.7Z"
        />
        <path
            stroke="currentColor"
            d="M12.5 15.03c0 2.158-2.14 3.674-3.073 4.233a.827.827 0 0 1-.854 0C7.64 18.704 5.5 17.188 5.5 15.029 5.5 12.912 7.196 11.5 9 11.5c1.867 0 3.5 1.412 3.5 3.53Z"
        />
        <path stroke="currentColor" d="m18.5 21.5-6-15m9-2-19 4" />
        <circle cx="9" cy="15" r="1" fill="currentColor" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "mapLight",
} as DefineComponent;
</script>
