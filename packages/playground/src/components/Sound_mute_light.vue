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
            d="M3.158 13.93a3.752 3.752 0 0 1 0-3.86 1.501 1.501 0 0 1 .993-.7l1.693-.339a.45.45 0 0 0 .258-.153L8.17 6.395c1.182-1.42 1.774-2.129 2.301-1.938C11 4.648 11 5.572 11 7.42v9.162c0 1.847 0 2.77-.528 2.962-.527.19-1.119-.519-2.301-1.938L6.1 15.122a.45.45 0 0 0-.257-.153l-1.693-.339a1.5 1.5 0 0 1-.993-.7Z"
        />
        <path fill="none" stroke="currentColor" d="m15 15 6-6m0 6-6-6" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "soundMuteLight",
} as DefineComponent;
</script>
