<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            stroke="currentColor"
            d="M16.5 10.5h1.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.428.218.988.218 2.108v3.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.428.218-.988.218-2.108.218H5.7c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C2.5 18.98 2.5 18.42 2.5 17.3v-3.6c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C4.02 10.5 4.58 10.5 5.7 10.5h1.8"
        />
        <path
            fill="currentColor"
            d="M5.01 20.402a.5.5 0 0 0 .98.196l-.98-.196Zm2.98-9.804a.5.5 0 0 0-.98-.196l.98.196Zm10.02 10a.5.5 0 0 0 .588.392.5.5 0 0 0 .392-.588l-.98.196Zm-1.02-10.196a.5.5 0 0 0-.98.196l.98-.196Zm-11 10.196 2-10-.98-.196-2 10 .98.196Zm13-.196-2-10-.98.196 2 10 .98-.196Z"
        />
        <path stroke="currentColor" d="M12 17.5v-2" />
        <path
            stroke="currentColor"
            stroke-linejoin="round"
            d="M12 7.5V4c0-.236 0-.353.073-.427.073-.073.191-.073.427-.073h6l-2 2 2 2H12Zm0 0V12"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "roadFinishLight",
} as DefineComponent;
</script>
