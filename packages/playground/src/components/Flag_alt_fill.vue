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
            d="M6 5.5V15h10.793c.514 0 .77 0 .834-.154.064-.155-.117-.336-.48-.7l-3.864-3.863c-.134-.133-.2-.2-.2-.283 0-.083.066-.15.2-.283l3.863-3.863c.364-.364.545-.545.481-.7C17.564 5 17.307 5 16.793 5H6.5c-.236 0-.354 0-.427.073C6 5.146 6 5.264 6 5.5Z"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M6 15V5.5c0-.236 0-.354.073-.427C6.146 5 6.264 5 6.5 5h10.293c.514 0 .77 0 .834.154.064.155-.117.336-.48.7l-3.864 3.863c-.134.133-.2.2-.2.283 0 .083.066.15.2.283l3.863 3.863c.364.364.545.545.481.7-.064.154-.32.154-.834.154H6Zm0 0v4"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "flagAltFill",
} as DefineComponent;
</script>
