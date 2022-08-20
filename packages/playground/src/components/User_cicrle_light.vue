<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="10" r="3" stroke="currentColor" />
        <circle cx="12" cy="12" r="9" stroke="currentColor" />
        <path
            fill="none"
            stroke="currentColor"
            d="M18 18.706c-.354-1.063-1.134-2.003-2.219-2.673C14.697 15.363 13.367 15 12 15s-2.697.363-3.781 1.033c-1.085.67-1.865 1.61-2.219 2.673"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "userCicrleLight",
} as DefineComponent;
</script>
