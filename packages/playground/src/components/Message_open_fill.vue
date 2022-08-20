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
            d="M3 10.415V15c0 2.828 0 4.243.879 5.121C4.757 21 6.172 21 9 21h6c2.828 0 4.243 0 5.121-.879C21 19.243 21 17.828 21 15v-4.585l-1.707 1.706a3 3 0 0 1-2.121.88H6.828a3 3 0 0 1-2.12-.88L3 10.415Zm.237-2.592 2.884 2.884a1 1 0 0 0 .707.293h10.344a1 1 0 0 0 .707-.293l2.884-2.884a2.325 2.325 0 0 0-.248-.508c-.484-.746-1.349-1.13-3.078-1.899l-3.812-1.694c-.8-.356-1.2-.533-1.625-.533-.424 0-.825.177-1.625.533L6.563 5.416c-1.73.769-2.594 1.153-3.078 1.899a2.324 2.324 0 0 0-.248.508Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "messageOpenFill",
} as DefineComponent;
</script>
