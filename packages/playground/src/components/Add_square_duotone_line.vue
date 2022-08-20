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
            stroke-opacity=".24"
            d="M3.5 11c0-1.9.001-3.274.142-4.322.139-1.034.406-1.675.883-2.153.477-.477 1.119-.744 2.152-.883C7.726 3.501 9.1 3.5 11 3.5h2c1.9 0 3.274.001 4.322.142 1.034.139 1.675.406 2.153.883.477.477.744 1.119.883 2.152.14 1.049.142 2.423.142 4.323v2c0 1.9-.001 3.274-.142 4.322-.139 1.034-.406 1.675-.883 2.153-.478.477-1.119.744-2.153.883-1.048.14-2.422.142-4.322.142h-2c-1.9 0-3.274-.001-4.323-.142-1.033-.139-1.675-.406-2.152-.883-.477-.478-.744-1.119-.883-2.153C3.501 16.274 3.5 14.9 3.5 13v-2Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            d="M12 8v8m4-4H8"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "addSquareDuotoneLine",
} as DefineComponent;
</script>
