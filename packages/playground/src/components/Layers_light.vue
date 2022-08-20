<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            stroke="currentColor"
            stroke-linejoin="round"
            d="M12 4 5 7l7 3 7-3-7-3Z"
        />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M7.66 10.316 4.803 11.54a.5.5 0 0 0 0 .92l7 3a.5.5 0 0 0 .394 0l7-3a.5.5 0 0 0 0-.92l-2.857-1.224-1.27.544L17.73 12 12 14.456 6.27 12l2.66-1.14-1.27-.544Z"
            clip-rule="evenodd"
        />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M7.66 15.316 4.803 16.54a.5.5 0 0 0 0 .92l7 3a.5.5 0 0 0 .394 0l7-3a.5.5 0 0 0 0-.92l-2.857-1.224-1.27.544L17.73 17 12 19.456 6.27 17l2.66-1.14-1.27-.544Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "layersLight",
} as DefineComponent;
</script>
