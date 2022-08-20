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
            d="M5.172 6.172C4 7.343 4 9.229 4 13v5.586c0 .89 1.077 1.337 1.707.707l2.147-2.147c.072-.072.108-.108.154-.127.046-.019.097-.019.2-.019H14c1.864 0 2.796 0 3.53-.304a4 4 0 0 0 2.165-2.165C20 13.796 20 12.864 20 11s0-2.796-.304-3.53a4 4 0 0 0-2.165-2.165C16.796 5 15.864 5 14 5h-2C8.229 5 6.343 5 5.172 6.172Z"
            clip-rule="evenodd"
        />
        <path
            stroke="currentColor"
            stroke-linejoin="round"
            d="M8.5 9.5h7m-7 3h5"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "commentDuotone",
} as DefineComponent;
</script>
