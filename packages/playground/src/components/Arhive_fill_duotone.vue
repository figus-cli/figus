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
            d="M4 9.3c0-.141 0-.212.044-.256C4.088 9 4.159 9 4.3 9h15.4c.141 0 .212 0 .256.044.044.044.044.114.044.256V15c0 1.886 0 2.828-.586 3.414C18.828 19 17.886 19 16 19H8c-1.886 0-2.828 0-3.414-.586C4 17.828 4 16.886 4 15V9.3ZM2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2 1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Z"
        />
        <rect width="6" height="1" x="9" y="12" fill="currentColor" rx=".5" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "arhiveFillDuotone",
} as DefineComponent;
</script>
