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
            d="M3 3v-.5h-.5V3H3Zm9.646 10.354a.5.5 0 0 0 .708 0 .5.5 0 0 0 0-.708l-.708.708ZM3.5 11V3h-1v8h1ZM3 3.5h8v-1H3v1Zm-.353-.146 10 10 .707-.708-10-10-.707.707Z"
        />
        <path
            stroke="currentColor"
            d="M4 15c0 1.87 0 2.804.402 3.5A3 3 0 0 0 5.5 19.598C6.196 20 7.13 20 9 20h5c2.828 0 4.243 0 5.121-.879C20 18.243 20 16.828 20 14V9c0-1.87 0-2.804-.402-3.5A3 3 0 0 0 18.5 4.402C17.804 4 16.87 4 15 4"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "outLight",
} as DefineComponent;
</script>
