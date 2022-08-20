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
            d="M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h8v-5.062c0-.654 0-1.241.064-1.717.07-.52.232-1.052.668-1.489.437-.436.97-.598 1.489-.668C15.697 13 16.284 13 16.938 13H22V5a3 3 0 0 0-3-3H5Zm16.73 13H17c-.735 0-1.186.002-1.513.046-.287.039-.334.093-.34.1h-.001c-.007.007-.061.054-.1.341-.044.327-.046.778-.046 1.513v4.73a2.998 2.998 0 0 0 .879-.609l5.242-5.242a2.998 2.998 0 0 0 .61-.879Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "blankFill",
} as DefineComponent;
</script>
