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
            d="M7.172 13H6a3 3 0 1 1 0-6c.28 0 .42 0 .517-.02.298-.06.44-.151.616-.399.058-.08.14-.263.303-.626a5.001 5.001 0 0 1 9.128 0c.163.364.245.545.303.626.177.248.318.34.616.4C17.581 7 17.721 7 18 7a3 3 0 1 1 0 6h-1.172l-3.414-3.414L12 8.172l-1.414 1.414L7.172 13Z"
            clip-rule="evenodd"
        />
        <path
            fill="currentColor"
            d="m12 12-.707-.707.707-.707.707.707L12 12Zm1 9a1 1 0 1 1-2 0h2Zm-5.707-5.707 4-4 1.414 1.414-4 4-1.414-1.414Zm5.414-4 4 4-1.414 1.414-4-4 1.414-1.414ZM13 12v9h-2v-9h2Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "uploadFill",
} as DefineComponent;
</script>
