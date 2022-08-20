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
            d="m10.5 15.5-1-3.5m-1-7.5-2 3m9-3 2 3m-4 8 1-3.5m-10-2.5c.584 0 1.09.406 1.217.976l1.087 4.892c.334 1.501.5 2.252 1.049 2.692.548.44 1.317.44 2.856.44h2.582c1.539 0 2.308 0 2.856-.44s.715-1.19 1.05-2.692l1.086-4.892A1.246 1.246 0 0 1 19.5 9.5"
        />
        <path
            fill="none"
            stroke="currentColor"
            d="M19.5 9.5h-15a1 1 0 1 1 0-2h15a1 1 0 1 1 0 2Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "basketAlt_2Light",
} as DefineComponent;
</script>
