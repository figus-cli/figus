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
            d="M20.693 17.33A9 9 0 0 0 19.14 9.52a9 9 0 0 0-14.28 0 9 9 0 0 0-1.553 7.808"
        />
        <path
            fill="none"
            stroke="currentColor"
            d="M12.766 15.582c.487.71.144 1.792-.766 2.417-.91.626-2.043.558-2.531-.151-.52-.756-2.313-5.007-3.402-7.637-.205-.495.4-.911.79-.542 2.064 1.96 5.39 5.157 5.909 5.913Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            d="M12 6v2m-6.364.636L7.05 10.05m11.314-1.414L16.95 10.05m3.743 7.28-1.932-.518m-15.454.517 1.932-.518"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "pressureLight",
} as DefineComponent;
</script>
