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
            d="m8.99 19.982.075.997-.075-.997Zm-.074-.997A5.604 5.604 0 0 1 8.5 19v2a7.6 7.6 0 0 0 .565-.021l-.15-1.994ZM8.5 19A5.5 5.5 0 0 1 3 13.5H1A7.5 7.5 0 0 0 8.5 21v-2ZM3 13.5A5.5 5.5 0 0 1 8.5 8V6A7.5 7.5 0 0 0 1 13.5h2ZM8.5 8a5.502 5.502 0 0 1 5.038 3.29l1.831-.804A7.502 7.502 0 0 0 8.5 6v2Zm7.5 5a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5v2Zm3 3a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5h-2Zm-3 3H9.01v2H16v-2Zm-6.99 0a.99.99 0 0 1 .99.99H8c0 .558.452 1.01 1.01 1.01v-2Zm4.528-7.71c.393.895 1.28 1.71 2.462 1.71v-2c-.194 0-.47-.149-.63-.514l-1.832.804ZM9.065 20.98A.99.99 0 0 1 8 19.991h2c0-.588-.5-1.05-1.084-1.006l.149 1.994Z"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M17.878 12.902a4 4 0 0 0 3.02-3.007A4 4 0 0 0 15.258 5.4 4 4 0 0 0 13 9.016"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "cloud",
} as DefineComponent;
</script>
