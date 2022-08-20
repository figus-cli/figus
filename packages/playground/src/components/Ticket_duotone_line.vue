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
            stroke-opacity=".24"
            d="M3.5 8.5a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v.25a.75.75 0 0 1-.75.75 2.25 2.25 0 0 0-2.25 2.25v.5a2.25 2.25 0 0 0 2.25 2.25.75.75 0 0 1 .75.75v.25a3 3 0 0 1-3 3h-11a3 3 0 0 1-3-3v-.25a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 0 2.25-2.25v-.5A2.25 2.25 0 0 0 4.25 9.5a.75.75 0 0 1-.75-.75V8.5Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            d="m12.96 10.159.403-.295-.404.295a1 1 0 0 0 .495.36l1.545.507-.952 1.317.406.293-.406-.293a1 1 0 0 0-.189.583l-.005 1.625-1.547-.498-.153.476.153-.476a1 1 0 0 0-.612 0l-1.547.498-.005-1.625a1 1 0 0 0-.19-.583l-.95-1.317 1.544-.507a1 1 0 0 0 .495-.36L12 8.847l.96 1.312Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "ticketDuotoneLine",
} as DefineComponent;
</script>
