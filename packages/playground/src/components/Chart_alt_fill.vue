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
            d="M2.879 2.879C2 3.757 2 5.172 2 8v8c0 2.828 0 4.243.879 5.121C3.757 22 5.172 22 8 22h8c2.828 0 4.243 0 5.121-.879C22 20.243 22 18.828 22 16V8c0-2.828 0-4.243-.879-5.121C20.243 2 18.828 2 16 2H8c-2.828 0-4.243 0-5.121.879Zm14.953 6.676a1 1 0 0 0-1.664-1.11l-3.044 4.566-.459-.917c-.687-1.373-2.601-1.493-3.453-.215l-3.044 4.566a1 1 0 1 0 1.664 1.11l3.044-4.566.459.917c.687 1.373 2.601 1.493 3.453.215l3.044-4.566Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "chartAltFill",
} as DefineComponent;
</script>
