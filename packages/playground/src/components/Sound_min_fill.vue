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
            d="M4.158 13.93a3.752 3.752 0 0 1 0-3.86 1.501 1.501 0 0 1 .993-.7l1.693-.339a.45.45 0 0 0 .258-.153L9.17 6.395c1.182-1.42 1.774-2.129 2.301-1.938C12 4.648 12 5.572 12 7.42v9.162c0 1.847 0 2.77-.528 2.962-.527.19-1.119-.519-2.301-1.938L7.1 15.122a.45.45 0 0 0-.257-.153l-1.693-.339a1.5 1.5 0 0 1-.993-.7Z"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M14.536 8.464a5 5 0 0 1 .027 7.044"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "soundMinFill",
} as DefineComponent;
</script>
