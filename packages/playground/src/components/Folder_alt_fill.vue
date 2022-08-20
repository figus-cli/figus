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
            stroke-width="2"
            d="M3 7c0-1.886 0-2.828.586-3.414C4.172 3 5.114 3 7 3h10c1.886 0 2.828 0 3.414.586C21 4.172 21 5.114 21 7v10c0 1.886 0 2.828-.586 3.414C19.828 21 18.886 21 17 21H7c-1.886 0-2.828 0-3.414-.586C3 19.828 3 18.886 3 17V7Z"
        />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M18 10h-5.343c-.818 0-1.226 0-1.594-.152-.368-.153-.657-.442-1.235-1.02l-.656-.656c-.578-.578-.868-.868-1.235-1.02C7.569 7 7.16 7 6.343 7H3v10c0 1.886 0 2.828.586 3.414C4.172 21 5.114 21 7 21h10c1.886 0 2.828 0 3.414-.586C21 19.828 21 18.886 21 17V7c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C19.398 10 18.932 10 18 10ZM7 15a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H7Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "folderAltFill",
} as DefineComponent;
</script>
