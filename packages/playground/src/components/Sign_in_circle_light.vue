<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path stroke="currentColor" d="M4.929 19.071a10 10 0 1 0 0-14.142" />
        <path
            fill="currentColor"
            d="m15 12 .39-.312.25.312-.25.312L15 12Zm-12 .5a.5.5 0 0 1 0-1v1Zm8.39-5.812 4 5-.78.624-4-5 .78-.624Zm4 5.624-4 5-.78-.624 4-5 .78.624ZM15 12.5H3v-1h12v1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "signInCircleLight",
} as DefineComponent;
</script>
