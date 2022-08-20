<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <rect
            width="11"
            height="11"
            x="6.5"
            y="6.5"
            stroke="currentColor"
            rx="2.5"
        />
        <path
            fill="none"
            stroke="currentColor"
            d="M15 6.5h.5V4.967c0-.443 0-.825-.041-1.13-.044-.329-.143-.643-.398-.898s-.57-.354-.897-.398c-.306-.041-.688-.041-1.131-.041h-2.066c-.443 0-.825 0-1.13.041-.329.044-.643.143-.898.398s-.354.57-.398.897c-.041.306-.041.688-.041 1.131V6.5H15Zm0 11h.5v1.533c0 .443 0 .825-.041 1.13-.044.329-.143.643-.398.898s-.57.354-.897.398c-.306.041-.688.041-1.131.041h-2.066c-.443 0-.825 0-1.13-.041-.329-.044-.643-.143-.898-.398s-.354-.57-.398-.897c-.041-.306-.041-.688-.041-1.131V17.5H15Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "watchAltLight",
} as DefineComponent;
</script>
