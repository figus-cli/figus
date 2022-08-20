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
            fill-opacity=".24"
            d="M5 17h4a3 3 0 0 1 3 3V10c0-2.828 0-4.243-.879-5.121C10.243 4 8.828 4 6 4H5c-.943 0-1.414 0-1.707.293C3 4.586 3 5.057 3 6v9c0 .943 0 1.414.293 1.707C3.586 17 4.057 17 5 17Z"
        />
        <path
            fill="currentColor"
            d="M19 17h-3a3 3 0 0 0-3 3V10c0-2.828 0-4.243.879-5.121C14.757 4 16.172 4 19 4c.943 0 1.414 0 1.707.293C21 4.586 21 5.057 21 6v9c0 .943 0 1.414-.293 1.707C20.414 17 19.943 17 19 17ZM5 4.15A.15.15 0 0 1 5.15 4h2.7a.15.15 0 0 1 .15.15v4.246a.25.25 0 0 1-.427.177l-.896-.896a.25.25 0 0 0-.354 0l-.896.896A.25.25 0 0 1 5 8.396V4.15Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "bookOpenDuotone",
} as DefineComponent;
</script>
