<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path fill="none" stroke="currentColor" d="M9 12a3 3 0 0 0 6 0" />
        <path
            fill="none"
            stroke="currentColor"
            d="M4.5 8.711c0-.601 0-.902.086-1.185.086-.283.252-.533.586-1.034l.14-.21c.582-.873.872-1.309 1.315-1.545.442-.237.966-.237 2.014-.237h6.718c1.048 0 1.572 0 2.014.237.443.236.733.672 1.315 1.544l.14.211c.334.5.5.75.586 1.034.086.283.086.584.086 1.185V15.5c0 1.886 0 2.828-.586 3.414-.586.586-1.528.586-3.414.586h-7c-1.886 0-2.828 0-3.414-.586C4.5 18.328 4.5 17.386 4.5 15.5V8.711Z"
        />
        <path fill="none" stroke="currentColor" d="M4.5 9.5h15" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "boxAltLight",
} as DefineComponent;
</script>
