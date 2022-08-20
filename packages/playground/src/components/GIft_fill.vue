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
            d="M11 8H5c-.943 0-1.414 0-1.707.293C3 8.586 3 9.057 3 10v1c0 .943 0 1.414.293 1.707C3.586 13 4.057 13 5 13h6V8Zm-5 7v4c0 .943 0 1.414.293 1.707C6.586 21 7.057 21 8 21h3v-6H6Zm7 6h3c.943 0 1.414 0 1.707-.293C18 20.414 18 19.943 18 19v-4h-5v6Zm5-8h1c.943 0 1.414 0 1.707-.293C21 12.414 21 11.943 21 11v-1c0-.943 0-1.414-.293-1.707C20.414 8 19.943 8 19 8h-6v5h5Z"
            clip-rule="evenodd"
        />
        <path
            fill="currentColor"
            d="M19 4.633V4.45a1.766 1.766 0 0 0-2.325-1.675A9.713 9.713 0 0 0 12.88 5.12L12 6v1h3.675c.215 0 .429-.035.633-.103l1.395-.465A1.897 1.897 0 0 0 19 4.632Zm-14 0V4.45a1.766 1.766 0 0 1 2.325-1.675 9.713 9.713 0 0 1 3.796 2.346L12 6v1H8.325c-.215 0-.429-.035-.633-.103l-1.395-.465A1.897 1.897 0 0 1 5 4.632Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "gIftFill",
} as DefineComponent;
</script>
