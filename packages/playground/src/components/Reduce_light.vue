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
            d="M15 15v-.5h-.5v.5h.5Zm5.646 6.354a.5.5 0 0 0 .708 0 .5.5 0 0 0 0-.708l-.708.708ZM15 9h-.5v.5h.5V9Zm6.354-5.646a.5.5 0 0 0-.708-.707l.708.707ZM9 15h.5v-.5H9v.5Zm-6.354 5.646a.5.5 0 0 0 .707.708l-.707-.708ZM9 9v.5h.5V9H9ZM3.354 2.646a.5.5 0 1 0-.707.707l.707-.707ZM15.5 20v-5h-1v5h1Zm-.5-4.5h5v-1h-5v1Zm-.354-.146 6 6 .708-.708-6-6-.708.708ZM14.5 4v5h1V4h-1Zm.5 5.5h5v-1h-5v1Zm.354-.146 6-6-.708-.707-6 6 .708.706ZM9.5 20v-5h-1v5h1ZM9 14.5H4v1h5v-1Zm-.354.146-6 6 .707.708 6-6-.706-.708ZM8.5 4v5h1V4h-1ZM9 8.5H4v1h5v-1Zm.354.146-6-6-.707.707 6 6 .706-.706Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "reduceLight",
} as DefineComponent;
</script>
