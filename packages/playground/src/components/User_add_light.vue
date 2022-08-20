<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="8" r="4" stroke="currentColor" />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M15.276 16a10.958 10.958 0 0 0-4.37-.446c-1.64.162-3.191.686-4.455 1.517-1.265.832-2.197 1.943-2.65 3.208a.5.5 0 1 0 .943.336C5.11 19.588 5.885 18.64 7 17.907c1.115-.734 2.508-1.21 4.005-1.358a10.152 10.152 0 0 1 1.649-.028A1.993 1.993 0 0 1 14 16h1.276Z"
            clip-rule="evenodd"
        />
        <path stroke="currentColor" d="M18 14v8m4-4h-8" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "userAddLight",
} as DefineComponent;
</script>
