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
            d="M18.237 15.116a19.456 19.456 0 0 0 1.951-2.05c.388-.472.582-.707.582-1.066 0-.359-.194-.594-.582-1.066C18.768 9.21 15.636 6 12 6c-.84 0-1.652.171-2.423.456l2.547 2.547a3 3 0 0 1 2.873 2.873l3.24 3.24Zm-8.844-4.602A2.986 2.986 0 0 0 9 12a3 3 0 0 0 3 3 2.986 2.986 0 0 0 1.486-.393l2.301 2.302C14.636 17.555 13.353 18 12 18c-3.636 0-6.768-3.21-8.188-4.934-.388-.472-.582-.707-.582-1.066 0-.359.194-.594.582-1.066.673-.817 1.732-1.97 3.046-2.954l2.535 2.534Z"
            clip-rule="evenodd"
        />
        <path stroke="currentColor" stroke-width="2" d="m5 2 16 16" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "viewHideFill",
} as DefineComponent;
</script>
