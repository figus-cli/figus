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
            d="M2 9c0-1.886 0-2.828.586-3.414C3.172 5 4.114 5 6 5h12c1.886 0 2.828 0 3.414.586C22 6.172 22 7.114 22 9c0 .471 0 .707-.146.854C21.707 10 21.47 10 21 10H3c-.471 0-.707 0-.854-.146C2 9.707 2 9.47 2 9Z"
        />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M2.586 21.414C2 20.828 2 19.886 2 18v-5c0-.471 0-.707.146-.854C2.293 12 2.53 12 3 12h18c.471 0 .707 0 .854.146.146.147.146.383.146.854v5c0 1.886 0 2.828-.586 3.414C20.828 22 19.886 22 18 22H6c-1.886 0-2.828 0-3.414-.586ZM8 16a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z"
            clip-rule="evenodd"
        />
        <path stroke="currentColor" stroke-width="2" d="M7 3v3m10-3v3" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "calendarFill",
} as DefineComponent;
</script>
