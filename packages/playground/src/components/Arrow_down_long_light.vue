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
            d="M12.5 17a.5.5 0 0 1-1 0h1Zm-1-14a.5.5 0 0 1 1 0h-1Zm0 14V3h1v14h-1Z"
        />
        <path
            fill="currentColor"
            d="m12.214 21.643 2.059-3.431A.8.8 0 0 0 13.587 17h-3.174a.8.8 0 0 0-.686 1.212l2.059 3.43a.25.25 0 0 0 .428 0Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "arrowDownLongLight",
} as DefineComponent;
</script>
