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
            d="m8 2-.707-.707L8 .586l.707.707L8 2Zm1 15a1 1 0 1 1-2 0h2ZM2.293 6.293l5-5 1.414 1.414-5 5-1.414-1.414Zm6.414-5 5 5-1.414 1.414-5-5 1.414-1.414ZM9 2v15H7V2h2Zm7 20-.707.707.707.707.707-.707L16 22Zm1-15a1 1 0 1 0-2 0h2Zm-6.707 10.707 5 5 1.414-1.414-5-5-1.414 1.414Zm6.414 5 5-5-1.414-1.414-5 5 1.414 1.414ZM17 22V7h-2v15h2Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "sortArrow",
} as DefineComponent;
</script>
