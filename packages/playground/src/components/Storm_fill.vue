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
            d="M6 12h12a3 3 0 1 0 0-6c-.64 0-1.174-.461-1.436-1.045a5.001 5.001 0 0 0-9.128 0C7.174 5.539 6.64 6 6 6a3 3 0 1 0 0 6Z"
        />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="m10.235 14-.462.786c-.787 1.338-1.18 2.007-.893 2.51.288.504 1.065.504 2.62.504.236 0 .354 0 .427.073.073.073.073.191.073.427v1.864c0 .74 0 1.109.184 1.16.185.05.372-.27.747-.907l1.296-2.203c.787-1.338 1.18-2.007.893-2.51-.288-.504-1.065-.504-2.62-.504-.236 0-.354 0-.427-.073C12 15.054 12 14.936 12 14.7V14h-1.765Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "stormFill",
} as DefineComponent;
</script>
