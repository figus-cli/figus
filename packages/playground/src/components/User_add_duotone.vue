<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="8" r="4" fill="currentColor" fill-opacity=".24" />
        <path
            fill="currentColor"
            fill-opacity=".24"
            fill-rule="evenodd"
            d="M12 13c-3.67 0-6.68 2.42-6.976 5.5-.026.275.2.5.476.5h13a.465.465 0 0 0 .476-.5C18.68 15.42 15.67 13 12 13Z"
            clip-rule="evenodd"
        />
        <path stroke="currentColor" d="M18.5 13.5v6m-3-3h6" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "userAddDuotone",
} as DefineComponent;
</script>
