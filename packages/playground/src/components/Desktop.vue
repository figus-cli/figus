<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M4 8c0-.971.002-1.599.064-2.061.059-.434.153-.57.229-.646.076-.076.212-.17.646-.229C5.4 5.002 6.029 5 7 5h10c.971 0 1.599.002 2.061.064.434.059.57.153.646.229.076.076.17.212.229.646C19.998 6.4 20 7.029 20 8v8H4V8Zm-.333 8C2.747 16 2 16.746 2 17.667A2.333 2.333 0 0 0 4.333 20h15.334A2.333 2.333 0 0 0 22 17.667c0-.92-.746-1.667-1.667-1.667H3.667Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "desktop",
} as DefineComponent;
</script>
