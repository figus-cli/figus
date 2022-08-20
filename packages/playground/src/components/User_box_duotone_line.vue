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
            fill-opacity=".24"
            fill-rule="evenodd"
            d="M3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828.653.654 1.528.943 2.83 1.07C6.065 19.185 8.726 17 12 17s5.934 2.184 5.999 4.899c1.3-.128 2.176-.417 2.83-1.07C22 19.656 22 17.77 22 14v-4c0-3.771 0-5.657-1.172-6.828C19.657 2 17.771 2 14 2h-4C6.229 2 4.343 2 3.172 3.172ZM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            clip-rule="evenodd"
        />
        <path
            stroke="currentColor"
            stroke-width="1.2"
            d="M17.94 21.299c-.2-1.184-.905-2.27-1.984-3.058s-2.461-1.229-3.896-1.24c-1.435-.013-2.828.404-3.926 1.175-1.097.77-1.827 1.844-2.057 3.024"
        />
        <circle
            cx="12"
            cy="10"
            r="3"
            stroke="currentColor"
            stroke-width="1.2"
        />
        <rect
            width="18.8"
            height="18.8"
            x="2.6"
            y="2.6"
            stroke="currentColor"
            stroke-width="1.2"
            rx="3.4"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "userBoxDuotoneLine",
} as DefineComponent;
</script>
