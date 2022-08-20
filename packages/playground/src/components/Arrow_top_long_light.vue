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
            d="M11.5 7a.5.5 0 0 1 1 0h-1Zm1 14a.5.5 0 0 1-1 0h1Zm0-14v14h-1V7h1Z"
        />
        <path
            fill="currentColor"
            d="M11.786 2.357 9.727 5.788A.8.8 0 0 0 10.413 7h3.174a.8.8 0 0 0 .686-1.212l-2.059-3.43a.25.25 0 0 0-.428 0Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "arrowTopLongLight",
} as DefineComponent;
</script>
