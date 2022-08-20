<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <mask id="a" fill="currentColor">
            <path
                d="M12 6.5c0-.24 0-.359.08-.433.082-.074.194-.065.42-.046a6 6 0 1 1-5.428 9.401c-.13-.186-.194-.279-.17-.386.024-.107.128-.166.335-.286l4.513-2.606c.122-.07.183-.105.216-.163.034-.058.034-.129.034-.27V6.5Z"
            />
        </mask>
        <path
            fill="currentColor"
            fill-opacity=".24"
            stroke="currentColor"
            stroke-width="2.4"
            d="M12 6.5c0-.24 0-.359.08-.433.082-.074.194-.065.42-.046a6 6 0 1 1-5.428 9.401c-.13-.186-.194-.279-.17-.386.024-.107.128-.166.335-.286l4.513-2.606c.122-.07.183-.105.216-.163.034-.058.034-.129.034-.27V6.5Z"
            mask="url(#a)"
        />
        <circle
            cx="12"
            cy="12"
            r="8.4"
            stroke="currentColor"
            stroke-width="1.2"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "timeAtackDuotoneLine",
} as DefineComponent;
</script>
