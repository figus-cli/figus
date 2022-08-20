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
            d="m14 15 .707-.707.707.707-.707.707L14 15Zm-3.293-4.707 4 4-1.414 1.414-4-4 1.414-1.414Zm4 5.414-4 4-1.414-1.414 4-4 1.414 1.414Z"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M9.67 6.153c-2.108.283-3.94.94-5.153 1.847-1.213.908-1.725 2.005-1.44 3.087.285 1.083 1.347 2.077 2.989 2.796C7.707 14.603 9.816 15 12 15m7.794-2.25c.591-.512.975-1.077 1.129-1.663.154-.585.076-1.18-.23-1.752-.306-.57-.833-1.106-1.553-1.574-.72-.47-1.616-.863-2.64-1.158"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "circleRightAlt",
} as DefineComponent;
</script>
