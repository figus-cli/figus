<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <rect
            width="20"
            height="9"
            x="2"
            y="2"
            fill="currentColor"
            fill-opacity=".24"
            rx="2"
        />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M19 10h-7.343c-.818 0-1.226 0-1.594-.152-.368-.153-.657-.442-1.235-1.02l-.792-.793c-.443-.443-.665-.664-.934-.805a2 2 0 0 0-.337-.14C6.476 7 6.163 7 5.536 7c-1.438 0-2.157 0-2.67.353a2 2 0 0 0-.512.513C2 8.378 2 9.097 2 10.536V18c0 1.886 0 2.828.586 3.414C3.172 22 4.114 22 6 22h12c1.886 0 2.828 0 3.414-.586C22 20.828 22 19.886 22 18V7c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 10 19.932 10 19 10ZM6 14a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H6Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "folderAltDuotoneFill",
} as DefineComponent;
</script>
