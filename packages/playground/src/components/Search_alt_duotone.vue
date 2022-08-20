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
            fill-rule="evenodd"
            d="M11 17a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM9.852 8.228A3 3 0 0 1 11 8a.5.5 0 0 0 0-1 4 4 0 0 0-4 4 .5.5 0 0 0 1 0 3 3 0 0 1 1.852-2.772Z"
            clip-rule="evenodd"
        />
        <path
            fill="currentColor"
            fill-opacity=".24"
            fill-rule="evenodd"
            d="M17.928 15a.5.5 0 0 0-.866-.5 7 7 0 0 1-2.562 2.562.5.5 0 1 0 .5.866A8.001 8.001 0 0 0 16.292 17l2.854 2.855a.5.5 0 0 0 .707 0 .5.5 0 0 0 0-.708L17 16.292A8.001 8.001 0 0 0 17.93 15Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "searchAltDuotone",
} as DefineComponent;
</script>
