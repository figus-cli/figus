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
            d="M9 4H7c-1.414 0-2.121 0-2.56.44C4 4.878 4 5.585 4 7v2m5 11H7c-1.414 0-2.121 0-2.56-.44C4 19.122 4 18.415 4 17v-2M15 4h2c1.414 0 2.121 0 2.56.44C20 4.878 20 5.585 20 7v2m-5 11h2c1.414 0 2.121 0 2.56-.44.44-.439.44-1.146.44-2.56v-2"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "fullLight",
} as DefineComponent;
</script>
