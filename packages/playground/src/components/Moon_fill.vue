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
            fill-rule="evenodd"
            d="M15 4c.292 0 .438 0 .578.042a1 1 0 0 1 .586 1.448c-.072.127-.29.338-.725.759A7.976 7.976 0 0 0 13 12c0 2.257.935 4.296 2.439 5.751.435.421.653.632.725.76a1 1 0 0 1-.586 1.447C15.438 20 15.292 20 15 20a8 8 0 1 1 0-16Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "moonFill",
} as DefineComponent;
</script>
