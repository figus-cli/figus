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
            fill-rule="evenodd"
            d="M10.5 6.576c0-.18 0-.27-.062-.315-.062-.045-.144-.018-.31.036a6 6 0 1 0 3.743 0c-.164-.054-.247-.08-.309-.036-.062.045-.062.135-.062.315V9a1.5 1.5 0 0 1-3 0V6.576Z"
            clip-rule="evenodd"
        />
        <path
            stroke="currentColor"
            d="M12 9V4m6.01 1.99A8.5 8.5 0 0 1 7.278 19.068 8.5 8.5 0 0 1 5.99 5.988"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "onButtonDuotone",
} as DefineComponent;
</script>
