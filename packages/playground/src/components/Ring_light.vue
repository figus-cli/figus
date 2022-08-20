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
            d="M7.342 12.946a4.722 4.722 0 0 1 9.316 0l.103.617a4.546 4.546 0 0 0 1.269 2.467.568.568 0 0 1-.402.97H6.372a.568.568 0 0 1-.402-.97 4.545 4.545 0 0 0 1.27-2.467l.102-.617Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            d="m11 9 1-6m1 6-1-6m-1.932 17.63c.114.106.365.2.714.267.35.067.778.103 1.218.103s.868-.036 1.217-.103c.35-.067.6-.161.715-.268"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "ringLight",
} as DefineComponent;
</script>
