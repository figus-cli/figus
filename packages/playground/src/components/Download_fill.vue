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
            d="M14.5 10.67V13a2.5 2.5 0 0 1-5 0v-2.33a5.021 5.021 0 0 0-2.064 2.285c-.163.364-.245.546-.303.627-.176.247-.318.339-.616.399C6.419 14 6.28 14 6 14a3 3 0 1 0 0 6h12a3 3 0 1 0 0-6c-.28 0-.42 0-.517-.02-.298-.06-.44-.152-.616-.4-.058-.08-.14-.262-.303-.626A5.02 5.02 0 0 0 14.5 10.67Z"
            clip-rule="evenodd"
        />
        <path
            fill="currentColor"
            d="m12 3-.707-.707.707-.707.707.707L12 3Zm1 10a1 1 0 1 1-2 0h2ZM7.293 6.293l4-4 1.414 1.414-4 4-1.414-1.414Zm5.414-4 4 4-1.414 1.414-4-4 1.414-1.414ZM13 3v10h-2V3h2Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "downloadFill",
} as DefineComponent;
</script>
