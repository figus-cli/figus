<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M13.172 3H9c-1.886 0-2.828 0-3.414.586C5 4.172 5 5.114 5 7v10c0 1.886 0 2.828.586 3.414C6.172 21 7.114 21 9 21h6c1.886 0 2.828 0 3.414-.586C19 19.828 19 18.886 19 17V8.828c0-.408 0-.613-.076-.796-.076-.184-.22-.329-.51-.618l-3.828-3.828c-.29-.29-.434-.434-.617-.51C13.785 3 13.58 3 13.171 3Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M9 13h6m-6 4h4"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M13 3v4c0 .943 0 1.414.293 1.707C13.586 9 14.057 9 15 9h4"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "fileDock",
} as DefineComponent;
</script>
