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
            d="M6 13V5.5c0-.236 0-.354.073-.427C6.146 5 6.264 5 6.5 5h3.882c.3 0 .451 0 .572.075.12.074.188.209.322.478l.448.894c.134.27.201.404.322.478.121.075.271.075.572.075H17.5c.236 0 .354 0 .427.073.073.073.073.191.073.427v7c0 .236 0 .354-.073.427-.073.073-.191.073-.427.073h-4.882c-.3 0-.451 0-.572-.075-.12-.074-.188-.209-.322-.478l-.448-.894c-.134-.27-.201-.404-.322-.478-.121-.075-.271-.075-.572-.075H6Zm0 0v6"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "flagFinish",
} as DefineComponent;
</script>
