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
            d="M3.5 8c0-.957.001-1.624.069-2.128.066-.49.186-.748.37-.933.185-.184.444-.304.933-.37C5.376 4.5 6.043 4.5 7 4.5h10c.957 0 1.624.001 2.128.069.49.066.748.186.933.37s.305.444.37.933c.068.504.069 1.171.069 2.128v8.5h-17V8Zm.167 8.5c-.645 0-1.167.522-1.167 1.167 0 1.012.82 1.833 1.833 1.833h15.334c1.012 0 1.833-.82 1.833-1.833 0-.645-.522-1.167-1.167-1.167H3.667Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "desktopLight",
} as DefineComponent;
</script>
