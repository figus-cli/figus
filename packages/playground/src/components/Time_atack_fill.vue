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
            fill-rule="evenodd"
            d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm.08-15.932C12 5.142 12 5.26 12 5.5v6.211c0 .141 0 .212-.034.27-.033.058-.094.093-.216.163L6.37 15.25c-.206.12-.31.18-.334.285-.024.106.04.2.167.389A7 7 0 0 0 12 19a7 7 0 0 0 6.062-3.5 7 7 0 0 0 0-7A7 7 0 0 0 12.5 5.018c-.227-.016-.34-.024-.42.05Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "timeAtackFill",
} as DefineComponent;
</script>
