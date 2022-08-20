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
            d="M12.753 3.266c.288.267.322.705.389 1.58l.216 2.807c.067.876.101 1.314.389 1.58.287.267.726.267 1.605.267h2.01c1.002 0 1.503 0 1.8.317s.262.816.196 1.816L19 17c0 1.886 0 2.828-.586 3.414C17.828 21 16.886 21 15 21H9c-1.886 0-2.828 0-3.414-.586C5 19.828 5 18.886 5 17V7c0-1.886 0-2.828.586-3.414C6.172 3 7.114 3 9 3h2.148c.879 0 1.318 0 1.605.266Zm-2.08 9.45 3.182 1.365c.808.346.808 1.491 0 1.838l-3.182 1.364A1.2 1.2 0 0 1 9 16.18v-2.36a1.2 1.2 0 0 1 1.673-1.104Z"
            clip-rule="evenodd"
        />
        <path
            stroke="currentColor"
            stroke-width="1.2"
            d="M13.172 3H9c-1.886 0-2.828 0-3.414.586C5 4.172 5 5.114 5 7v10c0 1.886 0 2.828.586 3.414C6.172 21 7.114 21 9 21h6c1.886 0 2.828 0 3.414-.586C19 19.828 19 18.886 19 17V8.828c0-.408 0-.613-.076-.796-.076-.184-.22-.329-.51-.618l-3.828-3.828c-.29-.29-.434-.434-.617-.51C13.785 3 13.58 3 13.171 3Z"
        />
        <path
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="1.2"
            d="m13.855 14.08-3.182-1.363A1.2 1.2 0 0 0 9 13.819v2.36a1.2 1.2 0 0 0 1.673 1.104l3.182-1.364c.808-.347.808-1.492 0-1.839Z"
        />
        <path
            stroke="currentColor"
            stroke-width="1.2"
            d="M13 3v4c0 .943 0 1.414.293 1.707C13.586 9 14.057 9 15 9h4"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "videoFileDuotoneLine",
} as DefineComponent;
</script>
