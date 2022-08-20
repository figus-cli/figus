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
            d="M5.293 5.293C5 5.586 5 6.057 5 7v10c0 1.886 0 2.828.586 3.414.326.327.764.471 1.414.535V19.5a1.5 1.5 0 0 1 3 0V21h4v-1.5a1.5 1.5 0 0 1 3 0v1.45c.65-.065 1.088-.21 1.414-.536C19 19.828 19 18.886 19 17V7c0-.943 0-1.414-.293-1.707C18.414 5 17.943 5 17 5H7c-.943 0-1.414 0-1.707.293Z"
            clip-rule="evenodd"
        />
        <path stroke="currentColor" d="M8.5 9.5h7m-7 3h4m-4 3h6" />
        <path
            fill="currentColor"
            d="M16 19.5a.5.5 0 0 0-1 0h1Zm-1 0V21h1v-1.5h-1Zm-6 0a.5.5 0 0 0-1 0h1Zm-1 0V21h1v-1.5H8Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "formDuotone",
} as DefineComponent;
</script>
