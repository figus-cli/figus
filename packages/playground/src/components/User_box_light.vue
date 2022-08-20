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
            d="M17.933 21.257c-.216-1.2-.948-2.293-2.06-3.076-1.112-.783-2.527-1.202-3.982-1.18-1.456.022-2.852.484-3.929 1.3-1.076.817-1.76 1.932-1.924 3.137"
        />
        <circle cx="12" cy="10" r="3" stroke="currentColor" />
        <rect
            width="19"
            height="19"
            x="2.5"
            y="2.5"
            stroke="currentColor"
            rx="3.5"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "userBoxLight",
} as DefineComponent;
</script>
