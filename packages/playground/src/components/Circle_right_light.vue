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
            d="m14 15 .354-.354.353.354-.353.354L14 15Zm-3.646-4.354 4 4-.708.708-4-4 .708-.708Zm4 4.708-4 4-.708-.708 4-4 .708.708Z"
        />
        <path
            stroke="currentColor"
            d="M19.794 12.75c1.017-.88 1.407-1.907 1.108-2.912-.3-1.006-1.27-1.931-2.756-2.625-1.485-.694-3.396-1.117-5.423-1.198-2.026-.082-4.049.182-5.737.748-1.688.566-2.943 1.402-3.56 2.37-.618.969-.562 2.013.16 2.964.721.95 2.065 1.75 3.812 2.27 1.747.52 3.795.729 5.81.592"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "circleRightLight",
} as DefineComponent;
</script>
